import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import  webpack from "webpack"
import { BuildOptions } from '../type/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildPlugins({paths, isDev}:BuildOptions):webpack.WebpackPluginInstance[]{

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].[contenthash].css",
            chunkFilename: isDev? "css/[id].css" : "css/[id].[contenthash].css",
        }),
        new webpack.ProgressPlugin()

    ]

}