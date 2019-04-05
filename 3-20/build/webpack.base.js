const config = require('../config/index');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const baseConfig = {
    entry: config.entryPath,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '../index.html')
        })
    ]
}

module.exports = baseConfig;