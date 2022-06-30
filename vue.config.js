const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 告诉webpack打包的index.html引入其他资源文件以./开头 不要以默认/开头
  publicPath:"./"
})
