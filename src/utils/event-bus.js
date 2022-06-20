/**
 * @Author:       ycwei
 * @Date:         2022-05-10 16:14:29
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-10 16:21:53
 * @Description:  event-bus 事件总线
 */
import Vue from 'vue'

/**
 * @description 创建实例
 * @example 		
 * 发送: component-a: EventBus.$emit('aMsg', '来自A页面的消息') 
 * 接受: component-b：EventBus.$on('aMsg', (msg) => { }) 
 * 移除监听: EventBus.$off('aMsg', {})
 */
export const EventBus = new Vue()