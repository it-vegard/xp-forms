var path = require('path');

var paths = {
  assets: 'src/main/resources/assets/'
};

module.exports = {
  entry: {
    'js/main.js': path.join(__dirname, paths.assets, 'js', 'main.js'),
    'css/main.css': path.join(__dirname, paths.assets, 'scss', 'main.scss')
  },
  output: {
    path: path.join(__dirname, 'build/resources/main/assets/'),
    filename: '[name]'
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ]
  },
  module: {
    loaders: [
      
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'env',
            'react'
          ]
        }
      },
      
      
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
      
    ]
  }
};
