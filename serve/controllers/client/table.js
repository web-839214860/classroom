
const classtableDao = require('../../service/classtable_dao')
const classDao = require('../../service/class_dao')
const classOccupyDao = require('../../service/classoccupy_dao')

module.exports = {


    posttable: async (ctx) => {
        const data = ctx.request.body
        // console.log(data);
    
          const msg={};
          const table=await classtableDao.getClientClassTableInfo(data.user_id)
          
        //   var endtime=new Date(table.t_endTime).getTime();
        //   var nowtime=new Date().getTime();

          if(table==null){
              msg.user_id=data.user_id;
              msg.t_name=data.username;
              msg.t_time=data.applytime;
              msg.t_media=data.media;
              msg.t_useTime=data.usetime;
              msg.t_endTime=data.endtime;
              msg.t_joinPeople=data.number;
              msg.t_useReason = data.reason;
              msg.t_contact=data.phone;
              await classtableDao.createClientClassTable(msg)

              ctx.status = 200;
              ctx.body = {
                code: 1,
                data: {
                    message: '申请成功'
                }
            }

          } else if (table !== null && new Date().getTime() < new Date(table.t_endTime).getTime()){
              ctx.status = 200;
              ctx.body = {
                  code: 0,
                  data: {
                      message: '还未使用过课室，不可申请'
                  }
              }
          } else if (table !== null && new Date().getTime() > new Date(table.t_endTime).getTime()){
              await classtableDao.delectClientClassTable(table.user_id)
              msg.user_id = data.user_id;
              msg.t_name = data.username;
              msg.t_time = data.applytime;
              msg.t_media = data.media;
              msg.t_useTime = data.usetime;
              msg.t_endTime = data.endtime;
              msg.t_joinPeople = data.number;
              msg.t_useReason = data.reason;
              msg.t_contact = data.phone;
              await classtableDao.createClientClassTable(msg)

              ctx.status = 200;
              ctx.body = {
                  code: 1,
                  data: {
                      message: '申请成功'
                  }
              }
          }
          else{
            ctx.status = 200;
            ctx.body = {
                code: -1,
                data: {
                    message: '该账号已申请过,请尽快使用课室!'
                }
            }
          }

        },

        tableinfo:async (ctx) =>{

            const data=ctx.state.user.u_id
            console.log(data);

            const tableinfo =  await classtableDao.getClientClassTableInfo(data);

            if (new Date(tableinfo.t_endTime).getTime() < new Date().getTime()){
                ctx.status = 200;
                ctx.body = {
                    code: -1,
                    data: ''
                }
            } else if (new Date(tableinfo.t_endTime).getTime() > new Date().getTime()){
                ctx.status = 200;
                ctx.body = {
                    code: 1,
                    data: tableinfo
                }
            }
          
        },


       alltableinfo:async(ctx) =>{
           const alltableinfo  =   await classtableDao.getAllInfo();

           ctx.status = 200;
           ctx.body = {
               code: 1,
               data: alltableinfo
           }
       },


       deletetable:async(ctx) => {
           const msg=ctx.params.id;
           console.log(msg);
           const deletetable = await classtableDao.delectClassTable(msg);
           console.log(deletetable);
           ctx.status = 200;
           ctx.body = {
               code: 1,
               data: {
                   message: '删除成功'
               }
           }
           
       },


       puttable:async(ctx) => {
           const msg=ctx.params.id;
           console.log(msg);
           const puttable = await classtableDao.getOneClassTableInfo(msg);
           let data4 = await classOccupyDao.delectClassOccupy(msg)
           let classInfo = { c_id: '', u_id: '', t_class: '', t_user: '', t_result: '' };
        //    let data2 = await classDao.updateClass(classInfo, puttable.c_id);
           let data3 = await classtableDao.updateClassTable(classInfo, msg);
           console.log(data3);
           if(data3==1){
               ctx.status = 200;
               ctx.body = {
                   code: 1,
                   data: {
                       message: '取消成功'
                   }
               }
           }else{
               ctx.status = 200;
               ctx.body = {
                   code: -1,
                   data: {
                       message: '取消失败'
                   }
               }
           }
       },


       onetableinfo:async(ctx) => {
           const msg = ctx.params.id;
           let oneclassinfo = await classtableDao.getOneClassTableInfo(msg);
           console.log(msg);
           ctx.status = 200;
           ctx.body = {
               code: 1,
               data: {
                   message: '获取成功',
                   oneclassinfo: oneclassinfo
               }
           }
       },


       postclass:async(ctx) => {
           const msg = ctx.params.id;
           let info=ctx.request.body;
        //    console.log(info);
        //    console.log(msg);
           let applyclass = await classDao.getClassInfo(info.class_id)
        //    console.log(applyclass.c_person);
           let classInfo = { c_id: info.class_id, u_id: info.user_id, t_result: info.result,t_class:applyclass.c_name,c_name: applyclass.c_name, c_media: applyclass.c_media, c_person: applyclass.c_person }
           await classtableDao.updateClassTable(classInfo, msg);
           let tableInfo= await classtableDao.getOneClassTableInfo(msg);
           classInfo.t_useTime=tableInfo.t_useTime;
           classInfo.t_endTime=tableInfo.t_endTime;
        //    console.log(classInfo);
        //    let timeInfo = { c_id: info.class_id, c_name: applyclass.c_name, c_person: applyclass.c_person, c_media: applyclass.c_media, t_useTime: tableInfo.t_useTime,t_endTime:tableInfo.t_endTime }
           let data3 = await classOccupyDao.createClientClassOccupy(classInfo, msg);
           console.log(data3);
           if(data3[1]==true){
               ctx.status = 200;
               ctx.body = {
                   code: 1,
                   data: {
                       message: '分配课室成功'
                   }
               }
           }
           else{
               ctx.status = 200;
               ctx.body = {
                   code: -1,
                   data: {
                       message: '分配课室失败'
                   }
               }
           }
       }

    }

