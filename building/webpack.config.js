const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('../style/[name].css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode:'production',
  entry: {
    index: './src/script/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/script")
        ],
        loader: "babel-loader",
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      },
    ],
  },
  plugins: [
    extractLESS,
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [new UglifyJsPlugin()],
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
};