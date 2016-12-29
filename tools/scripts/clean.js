import {resolve} from 'path'
import appRootDir from 'app-root-dir'
import rimraf from 'rimraf'

rimraf(resolve(appRootDir.get(), 'dist'), err => err && console.error(err))
