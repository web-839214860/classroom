const userDao=require('../service/user_dao')
const md5=require('../util/tools')
const uuid=require('../node_modules/uuid')
const jwt=require('jsonwebtoken')
module.exports={

   index:async(ctx,next)=>{
        let data = await userDao.getAllUser(); 
        // console.log(data)
        await ctx.render('message/user_message', { data: data })
   },

    sent:async(ctx,next)=>{
        let msg=ctx.request.body;
        // console.log(msg);
 
        var solt = uuid.v4();

        var password=msg.u_password;
        var md5Pass=await md5.MD5(password,solt);
         msg.solt=solt;
         msg.u_password=md5Pass;

        const data=await userDao.createUser(msg)
        console.log(data)
        if (data[1] == true){
            await ctx.redirect('/user/message',{a:true})
        }else{
            await ctx.redirect('/user/message')
        }
    },



   delect:async(ctx,next)=>{
    //    console.log(ctx.params);
       let b=ctx.params.b;
    //    console.log(b);
       userDao.delectUser(b);
       await ctx.redirect('/user/message',{})
   },


   edit:async(ctx,next)=>{
     
    //    console.log(ctx.params);
       let b = ctx.params.b;
    //    console.log(b);

       let data = await userDao.getUserInfo(b); 
       await ctx.render('message/edit', { info: data })
    },


    doedit:async(ctx,next)=>{
        // console.log(ctx.params);
        let id = ctx.params.b;
        // console.log(id);

        let info = ctx.request.body;
        // console.log(info);
        let userInfo = {  u_name: info.u_name,u_role: info.u_role, u_password: info.u_password}
        // console.log(userInfo);
        
        let data = await userDao.updateUser(userInfo, id);
        // console.log(data);
        await ctx.redirect('/user/message')

    },




    // postlogin:async(ctx)=>{
    //     const data=ctx.request.body
    //     //查询用户
    //     const user=await userDao.getUserInfo(data.user_id)
    //     //判断用户是否存在
    //     //console.log('user:'+user.u_name)
    //     if(!user){
    //         //表示不存在该用户
    //         //ctx.status=404;
    //         ctx.status=200;
    //         ctx.body={
    //             code:-1,
    //             data:{
    //                message:'该用户不存在'
    //             }
    //         };
    //         return;
    //     }
    //     //验证密码
    //     let md5Pass=await md5.MD5(data.u_password,user.solt)
    //     if(md5Pass===user.u_password){
    //         const payload={
    //             u_id:user.u_id,
    //             u_name:user.u_name
    //         };
    //         //生成token
    //         const token=jwt.sign(payload,"gamercode",{
    //             expiresIn:3600
    //         });
    //         console.log("生成token"+token)
    //         ctx.status=200;
    //         ctx.body={
    //             code:1,
    //             data:{
    //                 message:'验证成功',
    //                 token: 'Bearer ' + token
    //             }
    //         }
    //     }else{
    //         ctx.status=200;
    //         ctx.body={
    //             code:0,
    //             data:{
    //                 message:'密码错误'
    //             }
    //         };
    //     }
    // }



   

}