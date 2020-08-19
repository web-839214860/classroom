module.exports = {
  devServer: {
    // host:"localhost",//要设置当前访问的ip 否则失效
    host: "0.0.0.0",
    open: true, //浏览器自动打开页面
   // 1.配置对方域名及端口号
    proxy: {
        '/api': {
        target: 'http://localhost:3000',
        // target: 'http://172.16.124.101:3000',
        ws: true,
        changeOrigin: true, //是否跨域
        // pathRewrite:{
        //     '^/api':''
        // }
      }
    }
  },
  outputDir: 'dist',  //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
}