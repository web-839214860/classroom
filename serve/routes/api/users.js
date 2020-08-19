const router = require('koa-router')()
const userController = require('../../controllers/client/user')
const passport = require("../../middlewares/passport")


//路由中使用passport-jwt进行过滤验证
router.prefix('/api/users')

router.post('/postuser',userController.postuser)

router.post('/postlogin', userController.postlogin)

router.all('/*',
    passport.authenticate('jwt', { session: false })
    , async (ctx, next) => {
        console.log(ctx.request)
        await next()
    })

//学生端
//获取个人信息
router.get('/userinfo', userController.userinfo)

//修改密码
router.put('/putpassword',userController.putpassword)

//管理员
//获取所有用户信息
router.get('/getallinfo', userController.getallinfo)

//删除特定用户
router.delete('/deleteuser/:id', userController.deleteuser)

//获取特定用户信息用于编辑
router.get('/getoneuserinfo/:id', userController.getoneuserinfo)

//修改特定用户信息
router.put('/putoneuserinfo/:id', userController.putoneuserinfo)

//添加用户
router.post('/postoneuser', userController.postoneuser)

module.exports = router





