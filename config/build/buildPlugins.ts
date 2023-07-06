import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "../type/config";

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
            chunkFilename: isDev
                ? "css/[id].css"
                : "css/[id].[contenthash].css",
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return plugins;
}
