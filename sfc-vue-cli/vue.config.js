const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave:false,
  //配置反向代理 防止跨域
  devServer:{
    proxy:{
      '/api':{
        target:'https://i.maoyan.com',
        changeOrigin: true
      }
    }
  }
})
