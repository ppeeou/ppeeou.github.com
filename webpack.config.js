/*eslint-disable no-undef*/
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.resolve(__dirname);
const appNodeModules = path.resolve(appPath, 'node_modules');

const extractPlugin = new ExtractTextWebpackPlugin({ filename: 'main.css' });

const config = {
  mode: 'development',
  context: path.resolve(appPath),

  entry: {
    app: './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(appPath, 'src', 'dist'),
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({ use: ['css-loader'] }),
        include: [
          path.resolve(appNodeModules, 'gestalt'),
        ],
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextWebpackPlugin.extract({ use: ['css-loader', 'sass-loader'] }),
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(appPath, 'src/dist'),
    publicPath: '/dist/',
    compress: true,
    port: 8080,
  },
};

module.exports = config;
