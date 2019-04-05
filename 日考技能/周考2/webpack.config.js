const path = require('path');
const webpack = require('webpack');
const Htmlwebpackplugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
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
            },
            {
                test: /\.scss$/,
                use: ExtractPlugin.extract({ // 使用ExtractTextWebpackPlugin的extract方法
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'] // 提取的时候，继续用下面的方式处理

                })
            }, {
                test: /\.jpg$/,
                use: ['url-loader']
            }, {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractPlugin({
            filename: 'css/[name].min.css',
        }),
        new Htmlwebpackplugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    devServer: {
        hot: true,
        open: true,
        inline: true,
        host: 'localhost'

    },
    resolve: {
        alias: {
            'scss$': './sass/style.scss'
        }
    }
}