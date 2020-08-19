const log4js = require('../config/log4j_config')

const { formatError, formatRes } = require('./formateLog')


// 将这两种日志进行自定义格式化输出(1.文件 2.mongoose数据库形式)，同时存入数据库--logDao('ErrorRequest', 'error', formatError(ctx, error, resTime))
//调用 .getLogger() 可以获得 log4js 的 Logger 实例，这个实例的用法与 console 是一致的，可以调用.debug（也有 .info、.error 等方法）来输出日志
let logger = {}
let errorLogger = log4js.getLogger('error')
let resLogger = log4js.getLogger('response')


// 将这两种日志进行自定义格式化输出：
// 封装错误日志--到文件
logger.errLogger = (ctx, error, resTime) => {
    if(ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime))
    }
}
// 封装响应日志--到文件
logger.resLogger = (ctx, resTime) => {
    if(ctx) {
        resLogger.info(formatRes(ctx, resTime))
    }
}

module.exports = logger