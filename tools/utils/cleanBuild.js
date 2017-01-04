import {resolve} from 'path'
import appRootDir from 'app-root-dir'
import rimraf from 'rimraf'

/**
 * Remove the build folder
 */
export default () =>
  rimraf.sync(resolve(appRootDir.get(), 'dist'))
