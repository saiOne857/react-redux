const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template : 'index.html'}),
    new CleanWebpackPlugin(['public'])
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
    }]
  }
};