
const passport = require('../middlewares/passport')
module.exports = {
  index: async (ctx, next) => {

    if (!ctx.isAuthenticated()) {//判断是否认证
      await ctx.render('login', { error: '请重新登录' })
    } else {
      let userInfo = ctx.state.user //认证用户
      // console.log(userInfo);
      await ctx.render('index', { userInfo: userInfo })
    }


    // let userInfo = { user_id: ctx.session.userId, user_name: ctx.session.userName, user_role: ctx.session.userRole };
    // await ctx.render('index', {
    //   title: 'Hello Koa 2!',
    //   userInfo: userInfo
    // })
  },
  checklogin: async (ctx, next) => {

    return passport.authenticate('local', async (err, user, info) => {
      if (err) {
        await ctx.render('error', { message: '抱歉，权限验证错误！', error: err });
      }
      if (!user) {
        await ctx.render('login', { error: info })
      } else {
        ctx.login(user) //登录用户（序列化用户）
        await ctx.response.redirect('/')
      }
    })(ctx);


    // let { u_id, u_password } = ctx.request.body;
    // //squlize封装形式
    // const data = await userDao.getUserInfo(u_id);

    // var solt = data.solt;
    // var md5Pass = await md5.MD5(u_password, solt);
    // u_password = md5Pass;

    // if (data.u_password === u_password) {
    //   console.log(data);
    //   ctx.session.userId = u_id;
    //   ctx.session.userName = data.u_name;
    //   ctx.session.userRole = data.u_role;
    //   ctx.response.redirect('/');
    // } else {
    //   ctx.body = { success: false, msg: '账号或密码错误！' };
    // }

    //原生sql语句方式
    // let statedata = await user.checkUser(user_id,password);
    // if(statedata.code == '200'){
    //   ctx.session.userId = user_id;
    //   ctx.session.userName = statedata.userName;
    //   ctx.response.redirect('/');
    // } else{
    //   ctx.body = { success: false, msg: '账号或密码错误！' };
    // }  
  },
  logout: async (ctx, next) => {

    ctx.logout() //登出
    await ctx.render('login', { error: '' })

    // ctx.session.userId = null;
    // let userInfo = { user_id: ctx.session.userId, user_name: ctx.session.userName };
    // await ctx.render('index', {
    //   title: 'Hello Koa 2!',
    //   userInfo: userInfo
    // })
  },
}

