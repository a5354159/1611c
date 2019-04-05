const config = require('../config/index');
const webMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const proConfig = {
    mode: config.production.mode,
    output: {
        filename: '[name]-[hash].js',
        path: config.production.outputPath
    }
}
module.exports = webMerge(baseConfig, proConfig)