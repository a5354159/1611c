let htmlPlugins = require("html-webpack-plugin")
let webpack = require("webpack")
module.exports = {
    mode: "development",
    devtool: "eval-soure-map",
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.js",
    },
    devServer: {
        open: true,
        hot: true,
        contentBase: "./dist"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(gif|jpg|png)/,
            loaders: {
                loader: "url-loader",
                options: {
                    limit: 1000,
                    name: "[name].[ext]"
                }
            }
        }]
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js",
        }
    },
    plugins: [
        // new htmlPlugins({
        //     template: __dirname + "/public/index.html"
        // }),
        new webpack.HotModuleReplacementPlugin()
    ]
}