const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Vueloader = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: '[name]-[hash].js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                loader: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new Vueloader(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 9097,
        open: true,
        host: 'localhost',
        inline: true,
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.json', '.vue']
    }
};