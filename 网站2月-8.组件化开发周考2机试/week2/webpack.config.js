let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            js: [{
                                loader: "babel-loader"
                            }]
                        }
                    }
                }]
            },
            {
                test: /\.js$/,
                use: "babel-loader"
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.html$/,
                use: "html-loader"
            }, {
                test: /\.(jpg|png|gif)$/,
                use: "url-loader"
            }
        ]
    },
    devServer: {
        hot: true,
        host: "localhost",
        port: 9090,
        open: true,
        inline: true,
        before(app) {
            app.get('/getData', function(req, res, next) {
                res.send({ code: 1, msg: data })
            })
        }
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}