const passport = require('koa-passport')
var LocalStrategy = require('passport-local').Strategy
const userDao = require('../service/user_dao')
const md5 = require('../util/tools')

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//通过配置信息来生成jwt的请求，验证这个token
    secretOrKey: "gamercode" // 数字签名，与生成token时的一样，不能告诉用户
}

//权限本地认证
passport.use(new LocalStrategy({
    usernameField: 'u_id',
    passwordField: 'u_password'//来源自form
},
    async function (u_id, u_password,done) {
        let result = await userDao.getUserInfo(u_id);
        // console.log(result);
        var solt = result.solt;
        var md5Pass = await md5.MD5(u_password, solt);
        u_password = md5Pass;

        if (result.u_password == u_password) {
                return done(null, result, '登录成功')
        } else {
            return done(null, false, '账号或密码错误')
        }
    }
))

//配置koa-passport:序列化和反序列化
//serializeUser 在用户登录验证成功以后将会把用户的数据存储到session
passport.serializeUser(function (user, done) {
    //保护密码
    user.u_password = ''
    console.log('user' + user);
    done(null, user)
})
//deserializeUser 在每次请求的时候将从session中读取用户对象
passport.deserializeUser(function (user, done) {
    done(null, user)
    // console.log(user);
})

//JWT三部分：Header（头部）Payload（负载）Signature（签名）
//添加jwt认证策略
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    //jwt_payload 返回的是登录时返回的数据 即payload
    console.log(jwt_payload)
    const user = await userDao.getUserInfo(jwt_payload.user_id);
    if (user) {
        user.u_password = ''
        user.solt = ''
        done(null, user);
    } else {
        done(null, false);
    }
}))

module.exports = passport