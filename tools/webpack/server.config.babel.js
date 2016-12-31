import {resolve} from 'path'
import appRootDir from 'app-root-dir'
import nodeExternals from 'webpack-node-externals'

const sourcePath = resolve(appRootDir.get(), 'source')

export default {
  entry: [
    'babel-polyfill',
    resolve(sourcePath, 'server'),
  ],
  output: {
    path: resolve(appRootDir.get(), 'dist'),
    filename: 'server.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', sourcePath],
  },
  performance: {
    hints: false,
  },
}
