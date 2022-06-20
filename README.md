# vue-vant-base

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Directory description
```
|-- vue-vant-base
    |-- .env.production			
    |-- .gitignore
    |-- babel.config.js
    |-- jsconfig.json
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- README.md
    |-- vue.config.js
    |-- dist
    |-- src
        |-- App.vue 				// 主页面 
        |-- main.js 				// 主入口
        |-- apis 				    // 接口层
        |   |-- home.js             // home 页面接口
        |   |-- index.js            // axios 请求封装
        |-- assets 					// css、image、svg 等资源
        |-- components 			    // 组件
        |-- router 					// 所有路由
        |   |-- index.js
        |-- store 					// vuex 数据
        |   |-- index.js
        |-- utils 					// 工具层
        |   |-- index.js 		    // 公共方法
        |   |-- plugins.js 	        // 全局插件
        |   |-- event-bus.js        // 事件总线
        |-- views 					// UI 层

```