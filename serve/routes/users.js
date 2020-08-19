const router = require('koa-router')()
const homeController = require('../controllers/home')
const loginMiddleware = require('../middlewares/login')
const userDao = require('../service/user_dao')

router.prefix('/users')

router.get('/login',async (ctx, next) => {
  await ctx.render('login', {error:''
  })
})

router.get('/logout',homeController.logout)

router.post('/checkLogin',homeController.checklogin)

// router.post('/checkLogin',async(ctx,next)=>{
//   let {name,password} = ctx.request.body;
//   if (name=='123'&&password==='123') {
//     //保存登录状态，这句代码会在浏览器中生成一个cookie
//     ctx.session.user = name;
//     ctx.body = { success: true, msg: '登录成功！' };
//   }
//   else{
//     ctx.body = { success: false, msg: '账号或密码错误！' };
//   }
// })

router.all('*',loginMiddleware.loginstats)




module.exports = router
