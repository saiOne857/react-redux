const path = require('path');
const config = require('./webpack.config');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const webpack = require('webpack');

const extractCssChunks = new ExtractCssChunks({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

config.mode = 'development';
config.devtool = 'inline-source-map';
config.output.filename = '[name].js';
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  extractCssChunks
]);

config.devServer = {
  contentBase: path.resolve(__dirname, 'public/assets'),
  stats: 'errors-only',
  open: true,
  port: 8080,
  compress: true
};

module.exports = config;

