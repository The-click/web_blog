import webpack, { DefinePlugin } from "webpack";
import path from "path";
import { BuildPaths } from "../type/config";
import { buildCssLoader } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: "",
        entry: "",
        output: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve?.modules?.push(
        path.relative(__dirname, "../../src"),
        "node_modules"
    );
    config.resolve?.extensions?.push(".ts", ".tsx");

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module?.rules?.map(
        // @ts-ignore
        (rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        }
    );
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
        })
    );
    return config;
};
