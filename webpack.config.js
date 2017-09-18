var path = require('path');

var paths = {
  assets: 'src/main/resources/assets/'
};

module.exports = {
  entry: {
    'formsAdmin.js': path.join(__dirname, paths.assets, 'js', 'formsAdmin.jsx'),
    'formsAdmin.css': path.join(__dirname, paths.assets, 'scss', 'formsAdmin.scss')
  },
  output: {
    path: path.join(__dirname, 'build/resources/main/assets/'),
    filename: '[name]'
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.scss'
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
