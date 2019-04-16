const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const clean = plugins => plugins.filter(x => !!x);

const JSFilenameIdentifier = '[name].[chunkhash:8].js';

module.exports = {
  devtool: !isProduction ? 'cheap-module-source-map' : 'source-map',
  entry: [`${__dirname}/src/index.js`],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: JSFilenameIdentifier,
  },
  performance: !isProduction
    ? false
    : {
        hints: 'warning',
      },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: clean([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: JSFilenameIdentifier,
      minChunks: module =>
        module.context &&
        module.context.indexOf('node_modules') !== -1 &&
        module.resource &&
        module.resource.match(/\.js$/),
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: JSFilenameIdentifier,
      minChunks: Infinity,
    }),

    new HtmlPlugin({
      inject: true,
      template: 'src/index.html',
    }),

    isProduction &&
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),

    isProduction &&
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
        },
      }),
  ]),
};
