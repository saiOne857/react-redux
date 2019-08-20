const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const extractCssChunks = new ExtractCssChunks({
  filename: '[name].css'
})
module.exports = {
  entry: './index.js',
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template : 'index.html'}),
    extractCssChunks
   ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true,
    port: 8080,
    compress: true
  },
  module: {
    rules: [{
        test: /\.(jpg|png|gif|svg)$/,
        use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: './assets/',
            }
        }]
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: ExtractCssChunks.loader,
          options: {
              hot: true,
              reloadAll: true,
          }
      },
        'css-loader',
        'postcss-loader'
      ].filter(Boolean)
    }
  ]
  }
};