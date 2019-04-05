let path = require('path');
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './bulid')
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpg|gif|png|jpeg)$/,
            use: ['url-loader']
        }, {
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        }]
    },
    devServer: {
        hot: true,
        host: 'localhost',
        port: 8080,
        open: true,
        inline: true,
        before(app) {
            app.get('/add', (req, res, next) => {
                res.send({ code: 1, msg: data })
            })
        }
    },
    pliu
}