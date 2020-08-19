const cors = require('koa2-cors'); //跨域处理
var cors_config = new cors(
  {
    origin: function (ctx) { //设置允许来自指定域名请求  
      // return 'http://172.16.124.101:8080' //默认允许本地请求3000端口可跨域
      return 'http://localhost:8080' //默认允许本地请求3000端口可跨域
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。        
    credentials: true, //是否允许发送Cookie        
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],//设置所允许http的请求方法	
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段  			      
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段 
  });
module.exports = cors_config

