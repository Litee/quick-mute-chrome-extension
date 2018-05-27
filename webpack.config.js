var webpack = require("webpack");
var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var fileExtensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"];

var options = {
    entry: {
        background: path.join(__dirname, "src", "background.js")
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: new RegExp('\.(' + fileExtensions.join('|') + ')$'),
            loader: "file-loader?name=[name].[ext]",
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "src/manifest.json"
        }])
    ]
};

module.exports = options;