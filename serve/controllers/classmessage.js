const classDao = require('../service/class_dao')
module.exports = {

    index: async (ctx, next) => {
        let data = await classDao.getAllClass();
        // console.log(data)
        await ctx.render('class/classroom_message', { data: data })
    },


    delect: async (ctx, next) => {
        console.log(ctx.params);
        let b = ctx.params.b;
        console.log(b);
        classDao.delectClass(b);
        await ctx.redirect('/class/classroom_message', {})
    },

    add: async (ctx, next) => {
        let msg = ctx.request.body
        console.log(msg);
        const data = await classDao.createClass(msg)
        console.log(data[1])
        if (data[1] == true) {
            await ctx.redirect('/class/classroom_message', { a: true })
        } else {
            await ctx.redirect('/class/classroom_message')
        }
    },




    edit: async (ctx, next) => {

        console.log(ctx.params);
        let b = ctx.params.b;
        console.log(b);

        let data = await classDao.getClassInfo(b);
        await ctx.render('class/class_edit', { info: data })
    },


    doedit: async (ctx, next) => {
        console.log(ctx.params);
        let id = ctx.params.b;
        console.log(id);

        let info = ctx.request.body;
        console.log(info);
        let classInfo = { c_use: info.c_use}
        console.log(classInfo);

        let data = await classDao.updateClass(classInfo, id);
        console.log(data);
        await ctx.redirect('/class/classroom_message')

    }


}