const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost', // 本地
    port: 8080, // 端口号
    open: true, // 默认false、true自动打开
    proxy: {
      '/': {
        target: 'https://cli.vuejs.org', // 代理地址
        changeOrigin: true, // 跨域
        ws: false // websocket 代理
      }
    }
  }
})
