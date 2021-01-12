import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import  qs from 'qs'
Vue.prototype.$axios = axios
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
 Vue.prototype.$qs = qs
// echart 按需引入
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
Vue.prototype.$echarts = echarts



// import echarts from 'echarts' //引入echarts
// Vue.prototype.$echarts = echarts //引入组件

// import { Message  } from 'element-ui';
// Message.install = function (Vue, options) {
//   Vue.prototype.$message = Message
// }
// Vue.use(Message)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
const requireAuth=sessionStorage.getItem('loginToken')
 if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
  if (requireAuth) { // 通过vuex state获取当前的token是否存在
   next();
  }
  else {
   next({
    path: '/login',
    query: {redirect: from} // 将跳转的路由path作为参数，登录成功后跳转到该路由
   })
  }
 }
 else {
  next();
 }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
