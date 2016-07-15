'use strict';

var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var env = process.env.NODE_ENV

var config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  entry: {
    // 用数组的写法详见：https://github.com/webpack/webpack/issues/300
    Input: ['./src/Input/react.input'],
    Droplist: ['./src/Droplist/react.droplist'],
    Pagination: ['./src/Pagination/react.pagination'],
    Tooltip: ['./src/Tooltip/react.tooltip'],
    Components: ['./src/Input/react.input', './src/Droplist/react.droplist', './src/Pagination/react.pagination', './src/Tooltip/react.tooltip', './src/index'],
    vendor: ['react', 'react-dom']
  },
  output: {
    library: "[name]",
    libraryTarget: 'umd',
    filename: '[name].js',
    path: './built'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('[name].css')
  ]
}

if(env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = config
