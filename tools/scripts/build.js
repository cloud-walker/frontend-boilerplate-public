import cleanBuild from '../utils/cleanBuild'
import webpack from 'webpack'
import serverConfig from '../webpack/server.config.babel'
import webConfig from '../webpack/web.config.babel'

cleanBuild()

webpack(serverConfig).run((err, stats) => {
  if (err) {
    throw new Error(err)
  }

  console.info(stats.toString({colors: true}))
})

webpack(webConfig).run((err, stats) => {
  if (err) {
    throw new Error(err)
  }

  console.info(stats.toString({colors: true}))
})
