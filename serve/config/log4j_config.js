//Log4js 是 Node.js 中一个成熟的记录日志的第三方模块

const log4js = require('log4js') //加载log4js模块
//对log4js进行配置：在这里定义了两种形式的日志，分别是 errLogger 错误日志, resLogger 响应日志。

log4js.configure({//入口函数，配置log4js
    appenders: {//appenders是配置文件的一级属性:它的作用是配置输出源.后续我们真正输出日志的对象就是log4js的下属的输出源.举个例子说一下这个模式:一个组织要打扫卫生,那么组织本身是一个机构不能打扫卫生,只能由组织内各个员工来做打扫卫生的事.整个log4js可以理解成一个负责日志输出的组织,那么真正的日志输出是依靠的员工们就是appenders数组,appenders内每一个对象就是一个日志输出员工,基于这样的结构,我们自然也不难想出,每个员工都有自己的特性,他们输出的日志规则是不一样的
        error: {
            type: 'file',           //日志类型， type字段是控制日志输出对象的是什么类型的
            //日志输出位置，当目录文件或文件夹不存在时自动创建
            category: 'errLogger',    //日志名称
            filename: __dirname + '/../logs/error.log/',//指定输出文件路径，同时指定单一文件名称, 例如: error.log
            maxLogSize: 104800, // 文件最大存储空间
            backups: 100  //当文件内容超过文件存储空间时，备份文件的数量
        },
        response: {
            type: 'dateFile',//dateFile 输出到文件，文件可以按日期模式打印，例如: default-2017-02-03.log
            //  dateFile，根据时间保存文件位置，文件自动创建
            category: 'resLogger',//category翻译过来叫做种类.实际上更简单的理解成这个写日志员工的名字.
            //文件名为= filename + pattern
            filename: __dirname + '/../logs/responses/',////指定输出文件路径
            pattern: 'yyyy-MM-dd.log', //日志输出模式--这个只在type:datefile模式有效.表示一个文件的时间命名模式.在生成文件中会依照pattern配置来在filename的文件结尾追加一个时间串来命名文件
            alwaysIncludePattern: true,//这个只在type:datefile模式有效,这个是个开关配置 ture(默认值)是开启pattern, false是不开启pattern, 不开启时datefile文件将无任何时间后缀, 也不会分文件.
            maxLogSize: 104800,
            backups: 100
        }
    },
    categories: {//供外部调用的名称和对应设置定义
        error: { appenders: ['error'], level: 'error' },//level:日志的分级(不同级别的日志在控制台中采用不同的颜色，比如 error 通常是红色的)
        response: { appenders: ['response'], level: 'info' },
        default: { appenders: ['response'], level: 'info' }
    },
    replaceConsole: true
    //这个配置是表示是否替换控制台输出,replaceConsole:ture时如果不加这行,nodejs系统提供的console.log()输出的内容将不会显示
})
module.exports = log4js


