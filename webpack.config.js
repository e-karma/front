var autoprefixer = require('autoprefixer');
var csswring     = require('csswring');
var cssnext      = require('cssnext');
var cssimport    = require('postcss-import');
var lost = require('lost');

module.exports = {
  debug: true,

  entry: {
    javascript: ["./app/index.js"],
    html: "./index.html"
  },

  output: {
    path: "./dist",
    publicPath: "/",
    filename: "bundle.js"
  },

  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },

  devtool: 'source-map',

  module: {
        loaders: [
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader!postcss-loader'
            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'react-hot!babel-loader!react-map-styles'
            },
            {
              test: /\.html$/,
              loader: 'file?name=[name].[ext]',
            }
        ]
    },
    postcss: function () {
        return [
          cssimport({
            onImport: function (files) {
              files.forEach(this.addDependency);
            }.bind(this)
          }),
          cssnext(),
          lost(),
          autoprefixer, csswring
        ];
    }
};
