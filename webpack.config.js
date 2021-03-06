var path = require('path');

var paths = {
  assets: 'src/main/resources/assets/'
};

module.exports = {
  entry: [path.join(__dirname, paths.assets, 'js', 'main.js'),
  path.join(__dirname, paths.assets, 'scss', 'main.scss')],
  output: {
    path: path.join(__dirname, paths.assets),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015' ]
        }
      },
      
      
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
      
    ]
  }
};
