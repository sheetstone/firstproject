import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode:'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:`src/index.html`,
      inject:true
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
