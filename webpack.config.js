const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",

    output: {
        filename: "bundle.main.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },

    mode: "development",

    devServer: {
        historyApiFallback: true,
        port: 3000,
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },

    devtool: "source-map",

    plugins: [new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
          }),
        ],

    module: {
        
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },

            {
                test: /\.tsx$/,
                use: ["babel-loader"],
                exclude: "/node_modules/"
            },

            {
                test: /\.ts$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: "/node_modules/"
            },

            {
                test: /\.(ttf|woff|woff2)$/,
                loader: "url-loader",
                exclude: "/node_modules/",
            },

            {
                test: /\.(png|jp(e*)g|gif)$/,
                loader: "file-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
                exclude: "/node_modules/"
            },
        ]
    }


}