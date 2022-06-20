/**
 * @Author:       ycwei
 * @Date:         2022-05-09 15:22:06
 * @LastEditors:  ycwei
 * @LastEditTime: 2022-05-09 16:21:17
 * @Description:  全局注册插件
 */
export default {
 	install(Vue, Options) {
    /**
     * @description 全局的时间过滤器
     * @param   { string }   valdate
     * @return  { string }   yyyy-MM-dd HH-mm-ss
     * @example <div>{{ 1652081761311 | dateFormat }}</div> ==> <div>2022-05-09 15:16:01</div>
     */
 		Vue.filter('dateFormat', function (valdate) {
 			const dt = new Date(valdate)
 			const y = dt.getFullYear()
 			const m = (dt.getMonth() + 1 + '').padStart(2, '0')
 			const d = (dt.getDate() + '').padStart(2, '0')
 			const hh = (dt.getHours() + '').padStart(2, '0')
 			const mm = (dt.getMinutes() + '').padStart(2, '0')
 			const ss = (dt.getSeconds() + '').padStart(2, '0')
 			return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
 		})

    /**
     * @description 只能输入数字
     * @example <input v-number-only></input>
     */
 		Vue.directive('numberOnly', {
 			bind(el) {
 				el.handler = function () {
 					el.value = el.value.replace(/\D+/, '');
 				};
 				el.addEventListener('input', el.handler);
 			},
 			unbind(el) {
 				el.removeEventListener('input', el.handler);
 			}
 		})
    /**
     * @description 防抖，单位时间只触发最后一次
     * @param   {?Number|300} time - 间隔时间
     * @param   {Function} fn - 执行事件
     * @param   {?String|"click"} event - 事件类型 例："click"
     * @param   {Array} binding.value - [fn,event,time]
     * @example <el-button v-debounce="[reset,`click`,300]">刷新</el-button>，也可简写成：<el-button v-debounce="[reset]">刷新</el-button>
     */
 		Vue.directive('debounce', {
 			inserted: function (el, binding) {
 				let [fn, event = "click", time = 300] = binding.value
 				let timer
 				el.addEventListener(event, () => {
 					timer && clearTimeout(timer)
 					timer = setTimeout(() => fn(), time)
 				})
 			}
 		})
    /**
     * @description 节流，每单位时间可触发一次，第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
     * @param   {?Number|300} time - 间隔时间
     * @param   {Function} fn - 执行事件
     * @param   {?String|"click"} event - 事件类型 例："click"
     * @param   {Array} binding.value - [fn,event,time]
     * @example <el-button v-throttle="[reset,`click`,300]">刷新</el-button>，传递参数则：<el-button v-throttle="[()=>reset(param),`click`,300]">刷新</el-button>
     */
 		Vue.directive('throttle', {
 			inserted: function (el, binding) {
 				let [fn, event = "click", time = 300] = binding.value
 				let timer, timer_end;
 				el.addEventListener(event, () => {
 					if (timer) {
 						clearTimeout(timer_end);
 						return timer_end = setTimeout(() => fn(), time);
 					}
 					fn();
 					timer = setTimeout(() => timer = null, time)
 				})
 			}
 		})

 	}
}



        

        

       
