const path = require('path');
const webpack = require('webpack');
const Htmlwebpackplugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/js/index.js'),
    output: {
        filename: '[name]-[hash].js',
        path: path.join(__dirname, './bulid')
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Htmlwebpackplugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devServer: {
        hot: true,
        open: true,
        inline: true,
        port: 8080,
        host: 'localhost'
    },
    resolve: {
        alias: {
            'Vue$': path.join(__dirname, './src/js/vue.js'),
            'index$': path.join(__dirname, './src/css/index.css')
        },
        extensions: ['.js', '.css', '.json']
    }
}