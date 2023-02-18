import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "../type/config";
import { buildCssLoader } from "./loaders/buildCssLoaders";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const babelLoader = {
        test: /\.m?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                            saveMissing: true,
                            outputPath: "public/locales/{{locale}}/{{ns}}.json",
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [svgLoader, imgLoader, babelLoader, typescriptLoader, cssLoader];
}
