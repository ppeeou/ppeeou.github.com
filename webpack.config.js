const path = require('path');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const appPath = path.resolve(__dirname);

const extractPlugin = new extractTextWebpackPlugin({
    filename: 'main.css'
})

const config = {
    context: path.resolve(appPath),

    entry: './src/js/app.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(appPath, 'dist'),
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [ 'css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ],
    devServer: {
        contentBase: path.join(appPath),
        publicPath: "/dist/",
        port: 8080
    }
}

module.exports = config;