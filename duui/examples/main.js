import Vue from 'vue'
import App from './App.vue'
import router from './router'

//导入组件库
import DuUI from './../packages'
//注册组件库
Vue.use(DuUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
