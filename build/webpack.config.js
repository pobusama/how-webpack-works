const path = require('path');
const resolve = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: resolve('../src/index.js'),
  output: {
    filename: 'main.js',
    path: resolve('../dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/dist/'
  }
};