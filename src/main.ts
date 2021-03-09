import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@assets/css/normalize.scss"

// import 'amfe-flexible/index.js'

console.log(1111, process.env.VUE_APP_SEVERENV)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
