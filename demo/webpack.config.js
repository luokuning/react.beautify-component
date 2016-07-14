'use strict';

var webpack = require('webpack')

var config = {
  entry: {
    bundle: './index'
    // vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    path: './built'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
}

module.exports = config
