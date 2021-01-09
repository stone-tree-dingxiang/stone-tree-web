import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
