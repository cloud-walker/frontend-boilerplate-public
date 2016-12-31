import cleanBuild from '../utils/cleanBuild'
import webpack from 'webpack'
import webConfig from '../webpack/web.config.babel'

cleanBuild()

webpack(webConfig).run((err, stats) => {
  if (err) {
    throw new Error(err)
  }

  console.info(stats.toString({colors: true}))
})
