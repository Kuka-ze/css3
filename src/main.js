import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
//element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//预览
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import breadcrum from './components/breadcrumb.vue'

//放开下面三行代码 可以使用vconsole
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole
// export default vConsole
Vue.use(ElementUI)
Vue.use(preview)
Vue.use(breadcrum)
Vue.config.productionTip = false
// Vue.prototype.axios = axios
// Vue.use(axios)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')