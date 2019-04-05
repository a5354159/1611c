const config = require('../config/index');
const Htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    entry: config.entry,
    module: {
        rules: [{
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new Htmlwebpackplugin({
            template: path.join(__dirname, '../src/index.html')
        })
    ]
}