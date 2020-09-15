import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'

// 第一种方式
// import zh from 'vee-validate/dist/locale/zh_CN'
// 第二种
import './local/index'

Vue.use(VeeValidate)
// Validator.localize('zh-CN', zh)

const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
