const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')


const index = require('./routes/index')
const users = require('./routes/users')
const user = require('./routes/user')
const api_users = require('./routes/api/users')
const api_tables = require('./routes/api/tables')
const api_classrooms = require('./routes/api/classrooms')
const classroom = require('./routes/class')
const classtable=require('./routes/classtable')
const classoccupy=require('./routes/classoccupy')
const log4js = require('./util/log4')
const errorhandle=require('./middlewares/error')
const passport=require('./middlewares/passport')
const cors = require('./config/cors_config')




// error handler
onerror(app)

app.keys = ['this is my secret set'];

app.use(session({
  key: 'koa:sess', /** cookie的名称，可以不管 */
  maxAge: 7200000, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
}, app));

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  // extension: 'ejs'
  map: { html: 'ejs' }
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  log4js.resLogger(ctx, ms);
})


//passport
//会在请求周期ctx对象挂载以下方法与属性：1.ctx.state.user 认证用户 2.ctx.login(user) 登录用户（序列化用户）3.ctx.isAuthenticated() 判断是否认证 4.ctx.logout() 登出
app.use(passport.initialize())
app.use(passport.session())

app.use(cors)

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(api_users.routes(), api_users.allowedMethods())
app.use(api_tables.routes(), api_tables.allowedMethods())
app.use(api_classrooms.routes(), api_classrooms.allowedMethods())
app.use(classroom.routes(), classroom.allowedMethods())
app.use(classtable.routes(),classtable.allowedMethods())
app.use(classoccupy.routes(), classoccupy.allowedMethods())


app.use(errorhandle);


// 在项目中使用自定义的日志模型：
// error-handling
app.on('error', (err, ctx) => {
  log4js.errLogger(ctx, err)
  console.error('server error', err, ctx)
});


module.exports = app
