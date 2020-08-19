//model统一管理后从index.js中导入
//Model是一种表示与数据库中表关系的描述对象，它通过sequlize.define方法定义或通过sequlize.import导入创建实例对象。通过Model进行进行数据查询时，我们可以实现类似在数据库中直接使用SQL语句的查询、排序、分组、别名、连接查询等。
const { classroom, user, classtable,classoccupy } = require('../modules/index')

//定义数据库操作类
class classOccupyDao {
    //获取某个用户的全部信息
    static async getOneClassOccupyInfo(o_id) {//静态方法，无须实例化可直接调用
        return await classoccupy.findOne({//findOne() - 查询单条数据--查询单个实例（单条数据）。这将会使用LIMIT 1查询条件，所以回调中总是返回单个实例。
            include: [{
                model: classroom
            },
        {
            model:classtable
        }],
            where: {
                o_id
            }
        })
    }


    static async getAllClassOccupy() {
        return await classoccupy.findAll({
            raw: true    //返回原始数据
        })
    }

    static async getAllInfo() {
        return await classoccupy.findAll({
            include: [{
                model: classroom
            },
            {
                model: classtable
            }]

        })
    }

    // static async getOneAllInfo(t_id) {
    //     return await classtable.findAll({
    //         include: [{
    //             model: classroom
    //         },
    //         {
    //             model: user
    //         }],
    //         where:{
    //           t_id:t_id
    //         }

    //     })
    // }


    // static async getUserInfo(t_id){
    //     return await classtable.findAll({
    //         include:[{
    //             model:user
    //         }],
    //         where:{
    //             t_id
    //         }
    //     })
    // }


    static async createClassOccupy(msg,t_id) {
        return await classoccupy.findOrCreate({
            where: {
                o_id: ''
            },
            defaults: {
                c_id: msg.c_id,
                t_id: t_id
                // t_media: msg.t_media,
                // t_useTime: msg.t_useTime,
                // t_endTime: msg.t_endTime,
                // t_contact: msg.t_contact,
                // t_joinPeople: msg.t_joinPeople,
                // t_useReason: msg.t_useReason
            },
            raw: true
        })
    }


    static async createClientClassOccupy(msg, t_id) {
        return await classoccupy.findOrCreate({
            where: {
                o_id: ''
            },
            defaults: {
                c_id: msg.c_id,
                t_id: t_id,
                c_name:msg.c_name,
                t_useTime: msg.t_useTime,
                t_endTime: msg.t_endTime,
                c_media:msg.c_media,
                c_person:msg.c_person
            },
            raw: true
        })
    }

    static async delectClassOccupy(msg) {
        return await classoccupy.destroy({
            where: {
                t_id: msg
            }
        })
    }

    static async delectOneClassOccupy(msg) {
        return await classoccupy.destroy({
            where: {
                o_id: msg
            }
        })
    }

    static async updateClassOccupy(msg, id) {
        return await classoccupy.update({
          c_name:msg.c_name,
          c_person:msg.c_person,
          c_media:msg.c_media,
          t_useTime:msg.t_useTime,
          t_endTime:msg.t_endTime
        }, {
            where: {
                t_id:id
            }
        })
    }


}


module.exports = classOccupyDao
