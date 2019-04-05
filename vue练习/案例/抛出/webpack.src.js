var path = require('path');
var webpack = require('webpack')
const ExtractTextWebpackplugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        index: path.join(__dirname, './index.js')
            // app: path.join(__dirname, './app.js'),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './bulid'),
    },  
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextWebpackplugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new ExtractTextWebpackplugin({
            filename: __dirname + './css/[name].css',
        })
    ]


}