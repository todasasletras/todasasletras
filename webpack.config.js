const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  entry: [
    'react-hot-loader/patch',
    './src',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // ESLint
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
        },
      },
      // Babel
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Stylelint
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'stylelint-custom-processor-loader',
      },
      // Images
      {
        test: /\.(png|jpe?g|gif)$/,
        include: /src/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
      // SVG
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  // Hot Loader
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    modules: [
      path.resolve(`${__dirname}/src`),
      path.resolve(`${__dirname}/node_modules`),
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    hot: true,
  },
};
