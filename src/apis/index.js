/**
 * @Author:       ycwei
 * @Date:         2022-05-07 20:49:09
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-26 09:38:08
 * @Description:  基于 axios 二次封装
 */

import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : ''  // 生产环境走生产地址，其他环境走 vue.config.js > devServer 代理

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, params, Object.assign({}, config)).then(response => {
      resolve(response.data)
    }, err => {
      err.Cancel ? console.log(err) : reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
	get: (url, params, config = {}) => request(url, params, config, 'get'),
	post: (url, params, config = {}) => request(url, params, config, 'post')
}