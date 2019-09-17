const path = require('path');
const config = require('./webpack.config');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



const extractCssChunks = new ExtractCssChunks({
  filename: '[name].[hash].css',
  chunkFilename: '[id].css'
});

config.mode = 'production';
config.output.filename = '[name].[hash].js';
config.plugins = config.plugins.concat([
  extractCssChunks,
  new CompressionPlugin({
    algorithm: "gzip",
    minRatio: 0.8
  })
]);

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions : {
        mangle: true,
      }
    }),
  ],
};


module.exports = config;

