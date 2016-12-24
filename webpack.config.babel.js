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
    historyApiFallback: true,
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
  performance: {
    hints: process.env.NODE_ENV == 'production' && 'warning',
  },
}
