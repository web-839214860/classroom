//model统一管理后从index.js中导入
//Model是一种表示与数据库中表关系的描述对象，它通过sequlize.define方法定义或通过sequlize.import导入创建实例对象。通过Model进行进行数据查询时，我们可以实现类似在数据库中直接使用SQL语句的查询、排序、分组、别名、连接查询等。
const {classroom} = require('../modules/index')

//定义数据库操作类
class classDao {
    //获取某个用户的全部信息
    static async getClassInfo(c_id) {//静态方法，无须实例化可直接调用
        return await classroom.findOne({//findOne() - 查询单条数据--查询单个实例（单条数据）。这将会使用LIMIT 1查询条件，所以回调中总是返回单个实例。
            where: {
                c_id
            }
        })
    }


    static async getAllClass() {
        return await classroom.findAll({
            raw: true    //返回原始数据
        })
    }


    static async createClass(msg) {
        return await classroom.findOrCreate({
            where: {
                c_id: msg.c_id
            },
            defaults: {
                c_id: msg.c_id,
                c_name: msg.c_name,
                c_person: msg.c_person,
                c_use:msg.c_use,
                c_position:msg.c_position,
                c_media:msg.c_media
            },
            raw: true
        })
    }


    static async delectClass(msg) {
        return await classroom.destroy({
            where: {
                c_id: msg
            }
        })
    }


    static async updateClass(msg, id) {
        return await classroom.update({
            c_use: msg.c_use,
        }, {
            where: {
                c_id: id
            }
        })
    }


    static async createClientClass(msg) {
        return await classroom.findOrCreate({
            where: {
                c_id: msg.c_id
            },
            defaults: {
                c_id: msg.c_id,
                c_name: msg.c_name,
                c_person: msg.c_person,
                c_position: msg.c_position,
                c_media: msg.c_media
            },
            raw: true
        })
    }

}


module.exports = classDao
