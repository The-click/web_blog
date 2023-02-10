import webpack from 'webpack'
import { BuildOptions } from './type/config';
import { buildPlugins } from './build/buildPlugins';
import { buildLoaders } from './build/buildLoaders';
import { buildResolvers } from './build/buildResolvers';
import { buildDevServer } from './build/buildDevServer';

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
    const {paths, mode, isDev} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ?  buildDevServer(options) : undefined,
    
    }
}