import {resolve} from 'path'

const sourcePath = resolve(__dirname, 'source')

export default {
  entry: sourcePath,
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    port: 4000,
    contentBase: sourcePath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'react'],
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', sourcePath],
  },
}
