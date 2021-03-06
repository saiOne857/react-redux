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
  module: {
    rules: [{
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /(node_modules)/,
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
      exclude: /(node_modules)/,
      use: [
        {
          loader: ExtractCssChunks.loader,
          options: {
              hot: true,
              reloadAll: true,
          }
      },
      {
        loader : 'css-loader',
        options : {
          url: false,
          modules: { localIdentName: '[name]-[local]' },
          importLoaders: 1
        }
      },
        'postcss-loader'
      ].filter(Boolean)
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
      }
  }
  ]
  }
};