
const userDao = require('../../service/user_dao')
const md5 = require('../../util/tools')
const jwt = require('jsonwebtoken');
const uuid = require('../../node_modules/uuid')

module.exports = {

//学生
    postlogin: async (ctx) => {  //登录
        const data = ctx.request.body
        // 查询用户
        const user = await userDao.getUserInfo(data.user_id)
        // 判断用户是否存在
        // console.log('user:'+user.user_name)
        if (!user) {
            //表示不存在该用户
            // ctx.status = 404;
            ctx.status = 200;
            ctx.body = {
                code: -1,
                data: {
                    message: '该用户不存在'
                }
            };
            return;
        }
        //验证密码
        let md5pass = await md5.MD5(data.password, user.solt)
        if (md5pass === user.u_password && user.u_role==1) {  //学生
            const payload = {
                user_id: user.u_id,
                user_name: user.u_name
            };
            //生成token
            const token = jwt.sign(payload, "gamercode", {
                expiresIn: 3600
            });
            console.log("生成token：" + token)
            ctx.status = 200;
            ctx.body = {
                code: 1,
                data: {
                    message: '验证成功',
                    token: 'Bearer ' + token
                }
            }
        } else if (md5pass === user.u_password && user.u_role == 2){ //管理员
            const payload = {
                user_id: user.u_id,
                user_name: user.u_name
            };
            //生成token
            const token = jwt.sign(payload, "gamercode", {
                expiresIn: 3600
            });
            console.log("生成token：" + token)
            ctx.status = 200;
            ctx.body = {
                code: 2,
                data: {
                    message: '验证成功',
                    token: 'Bearer ' + token
                }
            }
        }   
        else {
            ctx.status = 200;
            ctx.body = {
                code: 0,
                data: {
                    message: '密码错误'
                }
            };
        }
    },

    userinfo: async (ctx) => {
        // console.log(ctx.state.user)
        ctx.body = {
            data: {
                message: '用户信息',
                user: ctx.state.user
            }
        };
    },


    putpassword:async(ctx) =>{  //修改密码
        const data = ctx.request.body
         console.log(data);
         const msg={}
        // 查询用户
        const user = await userDao.getUserInfo(data.user_id)
        console.log(user);
        //验证旧密码
        let md5pass = await md5.MD5(data.old_password, user.solt)
        console.log(md5pass);
        if (md5pass === user.u_password) {
            //修改为新密码
            var solt = uuid.v4();
            var password = data.new_password;
            var md5Pass2 = await md5.MD5(password, solt);
            msg.solt=solt;
            msg.u_password=md5Pass2;
            await userDao.updateUser(msg,data.user_id)
            ctx.status = 200;
            ctx.body = {
                code: 1,
                data: {
                    message: '修改成功'
                }
            }
        } else {
            ctx.status = 200;
            ctx.body = {
                code: -1,
                data: {
                    message: '修改错误,请确认是否输对密码'
                }
            };
        }
    },


    postuser:async(ctx)=>{  //注册
        const data = ctx.request.body
        console.log(data);
        const msg={};
        // 查询用户账号是否已经注册过
        const user = await userDao.getUserInfo(data.user_id)
        if( user == null){
            var solt = uuid.v4();
            var password = data.password;
            var md5Pass = await md5.MD5(password, solt);
            msg.solt = solt;
            msg.u_password = md5Pass;
            msg.u_id=data.user_id;
            msg.u_role=1;
            msg.u_name=data.name;
            msg.u_sex=data.sex;
            msg.u_birthday=data.birthday;
            msg.u_position=data.position;
            await userDao.createUser(msg)
        
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: {
                message: '注册成功'
            }
        }
        }else{
            ctx.status = 200;
            ctx.body = {
                code: -1,
                data: {
                    message: '该账号已注册成功,请更改账号!'
                }
        }

    }

},

//管理员
    getallinfo:async(ctx) => {
        const allusersinfo = await userDao.getAllUser();

        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: allusersinfo
        }
    },

    deleteuser:async(ctx) => {
        const msg = ctx.params.id;
        console.log(msg);
        const deleteuser = await userDao.delectUser(msg);
        console.log(deleteuser);
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: {
                message: '删除成功'
            }
        }
    },

    getoneuserinfo:async(ctx) => {
        const msg = ctx.params.id;
        console.log(msg);
        let oneuserinfo=await userDao.getUserInfo(msg);
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: {
                message: '获取成功',
                oneuserinfo: oneuserinfo
            }
        }
    },

    putoneuserinfo:async(ctx) => {  //修改
        const msg = ctx.params.id;
        console.log(msg);
        const info=ctx.request.body;
        let userInfo = { u_name: info.u_name, u_role: info.u_role, u_password: info.u_password, u_id: info.u_id, u_sex: info.u_sex, u_birthday: info.u_birthday, u_position: info.u_position }
        var solt = uuid.v4();
        userInfo.solt = solt;
        var md5Pass = await md5.MD5(userInfo.u_password, userInfo.solt);
        userInfo.u_password = md5Pass;
        console.log(userInfo);
        let data=await userDao.updateOneUser(userInfo,msg);
        console.log(data);
            ctx.status = 200;
            ctx.body = {
                code: 1,
                data: {
                    message: '修改成功',
                }
            }
    },

    postoneuser:async(ctx) => {  //添加
        const data = ctx.request.body
        console.log(data);
        const msg = {};
        // 查询用户账号是否已经存在过
        const user = await userDao.getUserInfo(data.u_id)
        if (user == null) {
            var solt = uuid.v4();
            var password = data.u_password;
            var md5Pass = await md5.MD5(password, solt);
            msg.solt = solt;
            msg.u_password = md5Pass;
            msg.u_id = data.u_id;
            msg.u_role = data.u_role;
            msg.u_name = data.u_name;
            msg.u_sex = data.u_sex;
            msg.u_birthday = data.u_birthday;
            msg.u_position = data.u_position;
            await userDao.createUser(msg)

            ctx.status = 200;
            ctx.body = {
                code: 1,
                data: {
                    message: '添加成功'
                }
            }
        } else {
            ctx.status = 200;
            ctx.body = {
                code: -1,
                data: {
                    message: '该账号存在,请更改账号!'
                }
            }

        }
    }

}

