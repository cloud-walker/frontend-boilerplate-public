import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'woot!'
})

app.listen(3000)
