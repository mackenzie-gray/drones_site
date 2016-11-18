const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:   './src/main.js',
    output: {
      path: './build/',
      filename: 'main.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.pug$/,
          exclude: /node_modules/,
          loader: 'pug-html-loader'
        },
        { test: /\.less$/,  loader: "style!css!less" },
        { test: /\.css$/,   loader: "style!css" },
        { test: /\.json$/,  loader: "json-loader" },
        { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.pug'
      })
    ]
};
