var path = require('path');
var webpack = require('webpack');

module.exports={
  devtool: 'source-map',
  entry: ['./src/App.ts'],
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js'
  },
  module:{
    loaders:[{
      test:/\.ts$/,
      include: path.resolve(__dirname, "src"),
      loader: 'ts-loader'
    }]
  },
  resolve:{
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: [".webpack.js", ".web.js", ".ts", ".js"]
  }
}
