import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import VueRouter from 'vue-router'
import router from './route/index'
//main.js
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// Vue.use(VueRouter)

Vue.config.productionTip = false
// Vue.prototype.axios = axios
// Vue.use(axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')