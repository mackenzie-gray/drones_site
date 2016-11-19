const webpack = require('webpack');
const Path = require('path');
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
          loader: 'pug-loader'
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
    ],
    resolve: {
      alias: {
        "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      }
    },
};
