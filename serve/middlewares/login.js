module.exports = {
    loginstats:async(ctx,next)=>{
        if(!ctx.session.userId){
            ctx.response.redirect('/users/login');
        }else{
            await next();
        }
    }
}