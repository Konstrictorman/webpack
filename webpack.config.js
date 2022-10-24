const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index_bundle.js",
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
