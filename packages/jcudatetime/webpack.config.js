const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    JcuDateTime: './src/JcuDateTime/JcuDateTime.js',
    JcuDate: './src/JcuDateTime/JcuDate.js',
    JcuTime: './src/JcuDateTime/JcuTime.js',
    Footer: './src/Footer/index.js',
    Content: './src/Content/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
  externals: [
    'react',
  ],
};
