const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // entry: "./src/index.js",
    mode: "development",
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    devtool: 'inline-source-map',
    devServer: {
        static: "./dist" // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
    },
    plugins: [
        // generates own index.html file
        // replaces existing index.html file in /dist
        new HtmlWebpackPlugin({
            title: "Development"
        })
    ],
    output: {
        // filename: "main.js",
        // filename: "bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // removes unused files frmo ./dist
        publicPath: "/" // makes the processed files available at the specified path
    },
    optimization: {
        runtimeChunk: "single" // The optimization.runtimeChunk: 'single' was added because in this example we have more than one entrypoint on a single HTML page
    }
};
