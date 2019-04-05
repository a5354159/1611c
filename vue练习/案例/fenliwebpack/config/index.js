const path = require('path');
const config = {
    entry: path.join(__dirname, '../src/index.js'),
    develompment: {
        port: 8080,
        host: 'localhost',
        mode: 'development',
    },
    production: {
        mode: 'production',
        outputPath: path.join(__dirname, '../', 'dist')
    }
}
module.exports = config;