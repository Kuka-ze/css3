import Vue from 'vue'
import VueRouter from 'vue-router'
import Border from '../pages/border.vue'

const HelloWorld = () => import('../components/HelloWorld.vue');

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: "/",
    component: HelloWorld,
  }, {
    path: "/border",
    component: Border,
  }]
})