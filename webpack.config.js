const webpack = require('webpack');

// const PROD_ENV = (process.env.NODE_ENV === 'production' || false);

const config = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
  },
  plugins: [
    // Remove duplicates
    new webpack.optimize.DedupePlugin(),

    // Webpack optimizations
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }),
  ]
};

module.exports = config;
