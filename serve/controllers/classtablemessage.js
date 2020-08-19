const classTableDao = require('../service/classtable_dao')
const classDao=require('../service/class_dao')
const classOccupyDao = require('../service/classoccupy_dao')
module.exports = {

    index: async (ctx, next) => {
        let data = await classTableDao.getAllInfo();
        // console.log(data);
        // console.log(data[0]._options.include[0].attributes)
        for(var i=0;i<data.length;i++){
            if (data[i].user!=null&&data[i].classroom!=null){
            // data[i].t_user = data[i].user.u_name;
            // data[i].t_class=data[i].classroom.c_name;
            let classInfo = { t_class: data[i].classroom.c_name, t_user: data[i].user.u_name}
            let data2 = await classTableDao.updateClassTable(classInfo, data[i].t_id);
            // console.log(data[i].u_name);
            // console.log(data[i].c_name);
            // console.log(data[i].classroom);
            // console.log(data2);
            }
        }
        let data3 = await classTableDao.getAllInfo();
        // console.log('-------');
        // console.log(data3);
        await ctx.render('classtable/classtable_message', { data: data3 })
    },


    delect: async (ctx, next) => {
        console.log(ctx.params);
        let b = ctx.params.b;
        // console.log(b);
        classTableDao.delectClassTable(b);
        classOccupyDao.delectClassOccupy(b);
        await ctx.redirect('/classtable/classtable_message', {})
    },

    add: async (ctx, next) => {
        let msg = ctx.request.body;
        console.log(msg);
        // let data2=format(new Date());
        // console.log(data2);
        const data = await classTableDao.createClassTable(msg)
        // console.log(data[1])
        if (data[1] == true) {
            await ctx.redirect('/classtable/classtable_message')
        } else {
            await ctx.redirect('/classtable/classtable_message')
        }
    },




    assign: async (ctx, next) => {

        console.log(ctx.params);
        let b = ctx.params.b;
        // let a=ctx.params.a;
        // console.log(b);

        let data = await classTableDao.getOneClassTableInfo(b);
        if (data.classroom != null) {
                data.c_use = data.classroom.c_use;
            }else{
            data.c_use = null;
            }
        // console.log(data);
        await ctx.render('classtable/class_assign', { info: data })
    },


    doassign: async (ctx, next) => {
        console.log(ctx.params);
        let id = ctx.params.b;
        // console.log(id);
        let info = ctx.request.body;
        // console.log(info);
        // let data3 = await classTableDao.getOneClassTableInfo(id);
        // console.log(data3.c_id);
        // if (info.u_id == '' || info.c_id == ''){
        //     let classInfo={c_use:1,c_id:data3.c_id}
        //   let data4=  await classDao.updateClass(classInfo, classInfo.c_id);
        //     console.log(data4);
        // }



        let classInfo = { c_id: info.c_id,u_id:info.u_id ,c_use:info.c_use,t_result:info.t_result}
        // console.log(classInfo);

        let data = await classTableDao.updateClassTable(classInfo, id);
        let data2=await classDao.updateClass(classInfo,classInfo.c_id);
        // console.log(data2);
        // console.log(data);

        let data3=await classOccupyDao.createClassOccupy(classInfo,id);
        // let data5=await classOccupyDao

        // console.log(data3);

        await ctx.redirect('/classtable/classtable_message')
    },

     cancel:async(ctx,next)=>{
         let id = ctx.params.b;
        //  console.log(id);
         let data4 = await classOccupyDao.delectClassOccupy(id)
         let data = await classTableDao.getOneClassTableInfo(id);
         let classInfo={c_use:1,c_id:'',u_id:'',t_class:'',t_user:'',t_result:''};
         let data2 = await classDao.updateClass(classInfo,data.c_id);
        //  console.log(data2);
         let data3 = await classTableDao.updateClassTable(classInfo, id);
        //  console.log(data3);
        //  let data2 = await classDao.updateClass(classInfo, classInfo.c_id);

         await ctx.redirect('/classtable/classtable_message')
     }


}