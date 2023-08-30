import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoaders";
import { BuildPaths } from "../type/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: "",
        entry: "",
        output: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        locales: path.resolve(__dirname, "public", "locales"),
        buildLocales: path.resolve(__dirname, "dist", "locales"),
    };

    // config!.resolve!.modules!.push(paths.src);
    config!.resolve?.modules?.push(path.relative(__dirname, "../../src"));

    config!.resolve?.extensions?.push(".ts", ".tsx");

    // eslint-disable-next-line no-param-reassign
    config!.module!.rules = config.module?.rules?.map(
        // @ts-ignore
        (rule: webpack.RuleSetRule | "...") => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        }
    );
    config!.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    config!.module?.rules?.push(buildCssLoader(true));

    config!.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
            __PROJECT__: JSON.stringify("storybook"),
        })
    );
    return config;
};
