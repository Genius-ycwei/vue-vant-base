/**
 * @Author:       ycwei
 * @Date:         2022-05-07 19:20:54
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-07 19:52:49
 * @Description:  px 转换 rem 适配文件, 当设计稿为 375 时, rootValue 为 37.5。
 */
const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-pxtorem');
 
module.exports = {
  plugins: [
    autoprefixer(),
    px2rem({ 
      rootValue: 37.5,
      unitPrecision: 5,
      propList: ['*'] 
    })
  ], 
};