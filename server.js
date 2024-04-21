const express = require("express");
const webpack = require("webpack");
const webpacDevMiddleware = require("webpack-dev-middleware");

const config = require("./webpack.config");
const compiler = webpack(config);

const app = express();

app.use(
    webpacDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.listen(3000, function () {
    console.log("Listen on port 3000");
});
