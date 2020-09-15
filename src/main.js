import VeeValidate, { Validator } from 'vee-validate'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 第一种方式
// import zh from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)
Validator.localize('zh-CN', zh)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
