import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { BuildOptions } from "../type/config";
import { buildCssLoader } from "./loaders/buildCssLoaders";
import { buildBabelLoaders } from "./loaders/buildBabelLoaders";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const imgLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const babelLoader = buildBabelLoaders(options);

    const cssLoader = buildCssLoader(isDev);
    const typescriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        // use: [
        //     {

        //         options: {
        //             getCustomTransformers: () => ({
        //                 before: [isDev && ReactRefreshTypeScript()].filter(
        //                     Boolean
        //                 ),
        //             }),
        //             transpileOnly: isDev,
        //         },
        //     },
        // ],
    };

    return [svgLoader, imgLoader, babelLoader, typescriptLoader, cssLoader];
}
