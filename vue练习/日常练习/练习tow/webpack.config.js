const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const VueTemplate = require('vue-template-compiler');
module.exports = {
    entry: path.join(__dirname, './src/js/main.js'),
    output: {
        filename: '[name]-[hash].js',
        path: path.join(__dirname, './bulid')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Htmlwebpackplugin({
            template: './index.html',
            filename: '[name].html'
        }),
        // new VueTemplate()
    ],
    resolve: {
        extensions: [".js", ".json", '.vue', '.scss', '.css']
    }
}