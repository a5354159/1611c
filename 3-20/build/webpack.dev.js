const config = require('../config/index');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const devConfig = {
    mode: config.development.mode,
    devServer: {
        port: config.development.port,
        host: config.development.host,
        open: true,
        inline: true
    }
}

module.exports = webpackMerge(webpackBase, devConfig);