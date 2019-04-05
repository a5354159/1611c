const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //入口文件
    entry: path.join(__dirname, './src/js/index.js'),
    //出口文件及目录
    output: {
        filename: '[name]-[hash].js',
        path: path.join(__dirname, './bulid')
    },
    //配置加载器
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpg|png|gif)$/,
            use: ['url-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    //配置插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Htmlwebpackplugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    //启服务，默认端口号8080
    devServer: {
        hot: true,
        inline: true,
        open: true,
        host: 'localhost'
    },
    //配置文件名
    resolve: {
        alias: {
            'scss$': path.join(__dirname, './src/css/style.scss'),
            'vue$': path.join(__dirname, './node_modules/vue/dist/vue.esm.js')
        }
    }
}