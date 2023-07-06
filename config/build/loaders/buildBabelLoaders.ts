import { BuildOptions } from "../../type/config";

export function buildBabelLoaders({ isDev }: BuildOptions) {
    return {
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
                    isDev && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
            },
        },
    };
}
