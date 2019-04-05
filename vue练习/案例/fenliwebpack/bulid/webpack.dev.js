const config = require('../config/index');
const webMerge = require('webpack-merge');
const webpackbase = require('./webpack.base');
const webpack = require('webpack');
const webpackDev = {
    mode: config.develompment.mode,
    devServer: {
        port: config.develompment.port,
        host: config.develompment.host,
        open: true,
        inline: true,
        hot: true
    },
    Plugin: [
        new webpack.HotModuleReplacementPlugin({
            
        })
    ]
}
module.exports = webMerge(webpackbase, webpackDev)