import Koa from 'koa'
import serve from 'koa-static'
import appRootDir from 'app-root-dir'
import {resolve} from 'path'

const app = new Koa()
const buildPath = resolve(appRootDir.get(), 'dist')
const port = 4000

app.use(serve(buildPath))

app.use(async ctx => {
  ctx.type = 'html'
  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
      </head>
      <body>
        <div id="hook"></div>
        <script src="manifest.js"></script>
        <script src="vendor.js"></script>
        <script src="main.js"></script>
      </body>
    </html>
  `
})

app.listen(port, () => console.info(`server listening on port ${port}`))
