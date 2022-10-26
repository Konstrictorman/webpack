var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var webpackConfig = {
    entry: path.resolve(__dirname, "src", "index.js"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
if (process.env.NODE_ENV === "development") {
    console.log("Setting dev options");
    webpackConfig.debug = true;
    webpackConfig.devtool = "sourcemap";
    webpackConfig.output.pathinfo = true;
}
if (process.env.NODE_ENV === "production") {
    console.log("Setting dev options");
    webpackConfig.output = {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
    },
        webpackConfig.plugins.push(new HtmlWebpackPlugin({
            template: "./src/index.html",
        }));
    webpackConfig.plugins.push(new CleanWebpackPlugin());
}
module.exports = webpackConfig;
