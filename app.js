const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router()
const productrouter = require('./routes/productrouter')


router.use('/api',productrouter.routes())
app.use(router.routes())

app.listen(3000)
console.log('koa server at port 3000')
