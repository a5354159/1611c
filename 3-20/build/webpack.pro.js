const config = require('../config/index');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const proConfig = {
    mode: config.production.mode,
    output: {
        filename: '[name]-[hash].js',
        path: config.production.outputPath
    }
};

module.exports = webpackMerge(webpackBase, proConfig)