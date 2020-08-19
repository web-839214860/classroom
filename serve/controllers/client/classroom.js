
const classtableDao = require('../../service/classtable_dao')
const classDao = require('../../service/class_dao')
const classOccupyDao = require('../../service/classoccupy_dao')

module.exports = {

      
    getclassroominfo:async (ctx) => {
        const allclassinfo = await classDao.getAllClass();

        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: allclassinfo
        }
    },
    
    deleteclassroom: async (ctx) => {
        const msg = ctx.params.id;
        console.log(msg);
        const deleteclass = await classDao.delectClass(msg);
        console.log(deleteclass);
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: {
                message: '删除成功'
            }
        }

    },

    postclassroom: async (ctx) => {
         const data = ctx.request.body;
         console.log(data);
        const newclassroom = await classDao.createClientClass(data)
        console.log(newclassroom[1])
        if(newclassroom[1]==true){
            ctx.status = 200;
            ctx.body = {
                code: 1,
                data: {
                    message: '添加成功'
                }
            }
        }else{
            ctx.status = 200;
            ctx.body = {
                code: -1,
                data: {
                    message: '课室已存在'
                }
            }
        }
    },

    getclassroomtimeinfo:async (ctx) => {
         const allclasstimeinfo=await classOccupyDao.getAllInfo();
        //  console.log(allclasstimeinfo)
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: allclasstimeinfo
        }
    },

    deletetimetable: async (ctx) => {
        const msg = ctx.params.id;
        console.log(msg);
        const deletetime = await classOccupyDao.delectOneClassOccupy(msg);
        console.log(deletetime);
        ctx.status = 200;
        ctx.body = {
            code: 1,
            data: {
                message: '删除成功'
            }
        }

    }


}

