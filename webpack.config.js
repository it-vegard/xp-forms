var path = require('path');

var paths = {
  assets: 'src/main/resources/assets/'
};

module.exports = {
  context: path.resolve(__dirname, 'src/main/resources/assets/'),
  entry: {
    'formsAdmin.js': './js/formsAdmin.jsx',
    'formsAdmin.css': './scss/formsAdmin.scss'
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
    rules: [

      {
        test: /\.jsx?$/,
        enforce: "pre",
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              fix: true
            }
          }
        ],
        exclude: /node_modules/
      },
      
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'react'
              ],
              plugins: [
                'transform-object-rest-spread'
              ]
            }
          }
        ]
      },
      
      
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
      
    ]
  }
};
