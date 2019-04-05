let path = require('path');
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './bulid'),
    }

}