//model统一管理后从index.js中导入
//Model是一种表示与数据库中表关系的描述对象，它通过sequlize.define方法定义或通过sequlize.import导入创建实例对象。通过Model进行进行数据查询时，我们可以实现类似在数据库中直接使用SQL语句的查询、排序、分组、别名、连接查询等。
const {user}=require('../modules/index')

//定义数据库操作类
class userDao {
    //获取某个用户的全部信息
    static async getUserInfo(u_id) {//静态方法，无须实例化可直接调用
        return await user.findOne({//findOne() - 查询单条数据--查询单个实例（单条数据）。这将会使用LIMIT 1查询条件，所以回调中总是返回单个实例。
            where: {
                u_id
            }
        })
    }


    static async getAllUser() {
        return await user.findAll({
            raw: true    //返回原始数据
        })
    }
    

    static async createUser(msg) {  
        return await user.findOrCreate({  //查找，如果不存在则创建实例并保存到数据库中
            where: {
                u_id: msg.u_id
            },
            defaults: {
                u_id: msg.u_id,
                u_password: msg.u_password,
                u_name: msg.u_name,
                u_role: msg.u_role,
                solt:msg.solt,
                u_sex:msg.u_sex,
                u_birthday:msg.u_birthday,
                u_position:msg.u_position
            },
            raw: true
        })
    }


    static async delectUser(msg) {
        return await user.destroy({
            where: {
                u_id: msg
            }
        })
    }


    static async updateUser(msg, id){
        return await user.update({
            u_name: msg.u_name,
            u_role:msg.u_role,
            solt:msg.solt,
            u_password: msg.u_password},{
           where:{
               u_id:id
           }
        })
    }


    static async updateOneUser(msg, id) {
        return await user.update({
            u_name: msg.u_name,
            u_role: msg.u_role,
            solt: msg.solt,
            u_password: msg.u_password,
            u_id: msg.u_id,
            u_sex: msg.u_sex,
            u_birthday: msg.u_birthday,
            u_position: msg.u_position
        }, {
            where: {
                u_id: id
            }
        })
    }


}


module.exports = userDao
