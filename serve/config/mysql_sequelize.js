//配置数据连接

var Sequelize = require("sequelize")//加载ORM框架--sequelize
var sequelize = new Sequelize('classroom', 'root', 'sise', {//通过new关键字进行实例化，实例化后就会以连接池的形式连接到所使用的数据库，var sequelize = new Sequelize(database, [username=null], [password=null], [options={}])，实例化Sequelize时，需要传入数据库名、用户名和密码，还可以传入一个可选的options参数对象。
    host: 'localhost',//连接数据库的主机
    dialect: 'mysql',//要连接的数据库类型。可选值有：mysql、postgres、sqlite、mariadb、mssql
    //operatorsAliases:false,
    dialectOptions: {//路径模块所使用的扩展选项
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',//排序规则
        supportBigNumbers: true,//当在数据库中处理一个大数(BIGINT和DECIMAL)数据类型的时候，你需要启用这个选项(默认: false).
        bigNumberStrings: true//这个选项需要bigNumberStrings与 supportBigNumbers同时启用，强制把数据库中大数(BIGINT和DECIMAL)数据类型的值转换为javascript字符串对象返回。(默认:false)。
    },
    pool: {//使用连接池连接，默认为true
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000 //空闲
    },
    define:{
        paranoid: false,//	使用逻辑删除。设置为true后，调用 destroy 方法时将不会删队模型，而是设置一个 deletedAt 列。此设置需要 timestamps=true
        operatorsAliases: false //不添加别名
    },
    define:{
        //是否冻结表名，最好设置为true，要不sequelize会自动给表名加上复数s造成查询数据失败。
        //mongoose也有这样的问题
        freezeTableName: true,//设置为true时，sequelize不会改变表名
        //是否为表添加createdAt和updatedAt字段
        //createdAt 记录表的创建时间
        //updatedAt 记录字段更新时间
        timestamps: false,//不为模型添加 createdAt 和 updatedAt 两个时间戳字段
        //是否为表添加 deletedAt字段
        //在日常开发中删除数据记录是一大禁忌，因此我们删除数据并不会真正删除，而是为他添加
        //deletedAt字段
        paranoid:false,
        //是否开启op
        //operatorsAliases:false
    },

      // 时区
    timezone: '+08:00' //时间转换时从数据库得到的JavaScript时间。这个时区将应用于连接服务器的 NOW、CURRENT_TIMESTAMP或其它日期函数
    

});

module.exports = {
    sequelize
};


