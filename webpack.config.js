const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src/main/resources/assets/'),
  entry: {
    'formsAdmin.js': './js/formsAdmin.jsx',
    './css/bundle.css': './scss/formsAdmin.scss',
  },
  output: {
    path: path.join(__dirname, 'build/resources/main/assets/'),
    filename: '[name]',
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.scss',
    ],
  },
  module: {
    rules: [

      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              fix: true,
            },
          },
        ],
        exclude: /node_modules/,
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
                'react',
              ],
              plugins: [
                'transform-object-rest-spread',
              ],
            },
          },
        ],
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },

    ],
  },
  plugins: [
    new ExtractTextPlugin('formsAdmin.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /formsAdmin\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
      extractComments: true,
    }),
  ],
};
