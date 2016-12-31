import {resolve} from 'path'
import appRootDir from 'app-root-dir'
import {optimize} from 'webpack'

const sourcePath = resolve(appRootDir.get(), 'source')

export default {
  entry: {
    main: sourcePath,
    vendor: [
      'react',
      'react-dom',
      'react-router',
    ],
  },
  output: {
    path: resolve(appRootDir.get(), 'dist'),
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
      },
    ],
  },
  resolve: {
    modules: ['node_modules', sourcePath],
  },
  plugins: [
    new optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
  performance: {
    hints: process.env.NODE_ENV == 'production' && 'warning',
  },
}
