const webpack = require('webpack');
const path = require('path');

const LIB_DIR = path.resolve(__dirname, 'lib');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(LIB_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    library: 'ghFeatureSwitch',
    libraryTarget: "commonjs2"
  },
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  optimization: {
    namedModules: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  }
};
