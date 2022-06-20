/**
 * @Author:       ycwei
 * @Date:         2022-05-07 20:54:39
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-09 11:45:25
 * @Description:  home 请求接口
 */
import http from './index.js'

export const test = (params) => http.get('manifest.json', params )
