const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // entry: "./src/index.js",
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    plugins: [
        // generates own index.html file
        // replaces existing index.html file in /dist
        new HtmlWebpackPlugin({
            title: "Output Management"
        })
    ],
    output: {
        // filename: "main.js",
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // removes unused files frmo ./dist
    },
};
