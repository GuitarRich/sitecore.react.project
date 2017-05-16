//var debug = process.env.NODE_ENV !== "production";
var debug = true;
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src/app"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    fed: "./fed.js",
    client: "./client.js",
    server: "./server.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/src/app",
    filename: "[name].min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};