//model统一管理后从index.js中导入
//Model是一种表示与数据库中表关系的描述对象，它通过sequlize.define方法定义或通过sequlize.import导入创建实例对象。通过Model进行进行数据查询时，我们可以实现类似在数据库中直接使用SQL语句的查询、排序、分组、别名、连接查询等。
const { classroom,user,classtable } = require('../modules/index')

//定义数据库操作类
class classTableDao {
    //获取某个用户的全部信息
    static async getOneClassTableInfo(t_id) {//静态方法，无须实例化可直接调用
        return await classtable.findOne({//findOne() - 查询单条数据--查询单个实例（单条数据）。这将会使用LIMIT 1查询条件，所以回调中总是返回单个实例。
            include: [{
                model:classroom
            }],
            where: {
                t_id
            }
        })
    }


    static async getAllClassTable() {
        return await classtable.findAll({
            raw: true    //返回原始数据
        })
    }

    static async getAllInfo(){
        return await classtable.findAll({
            include:[{
                model:classroom
            },
        {
            model: user
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


    static async createClassTable(msg) {
        return await classtable.findOrCreate({
            where: {
                t_id: ''
            },
            defaults: {
                t_name: msg.t_name,
                t_time: msg.t_time,
                t_media:msg.t_media,
                t_useTime: msg.t_useTime,
                t_endTime: msg.t_endTime,
                t_contact: msg.t_contact,
                t_joinPeople: msg.t_joinPeople,
                t_useReason: msg.t_useReason
            },
            raw: true
        })
    }


    static async getClientClassTableInfo(id) {//静态方法，无须实例化可直接调用
        return await classtable.findOne({//findOne() - 查询单条数据--查询单个实例（单条数据）。这将会使用LIMIT 1查询条件，所以回调中总是返回单个实例。
            where: {
                user_id:id
            },
            include: [{
                model: classroom
            },
            {
                model: user
            }]
        })
    }


    static async createClientClassTable(msg) {
        return await classtable.findOrCreate({
            where: {
               user_id: ''
            },
            defaults: {
                user_id:msg.user_id,
                t_name: msg.t_name,
                t_time: msg.t_time,
                t_media: msg.t_media,
                t_useTime: msg.t_useTime,
                t_endTime: msg.t_endTime,
                t_contact: msg.t_contact,
                t_joinPeople: msg.t_joinPeople,
                t_useReason: msg.t_useReason
            },
            raw: true
        })
    }

    static async delectClientClassTable(msg) {
        return await classtable.destroy({
            where: {
                user_id: msg
            }
        })
    }


    static async delectClassTable(msg) {
        return await classtable.destroy({
            where: {
                t_id: msg
            }
        })
    }


    static async updateClassTable(msg, id) {
        return await classtable.update({
            c_id: msg.c_id,
            u_id:msg.u_id,
            t_user:msg.t_user,
            t_class:msg.t_class,
            t_result:msg.t_result
        }, {
            where: {
                t_id: id
            }
        })
    }


}


module.exports = classTableDao
