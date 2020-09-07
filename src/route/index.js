import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('../components/HomePage.vue');
const HelloWorld = () => import('../components/HelloWorld.vue');
const Border = () => import('../pages/border.vue');
const Radius = () => import('../pages/radius.vue');
const Background = () => import('../pages/background.vue');
const FontFace = () => import('../pages/fontFace.vue');
const Gradients = () => import('../pages/Gradients.vue');
const Text = () => import('../pages/text.vue');
const TwoD = () => import('../pages/2D.vue');
const ThreeD = () => import('../pages/3d.vue');
//图片预览
const Preview = () => import('../pages/views/preview.vue');
Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: "/",
      component: HomePage,
    }, {
      path: "/HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/border",
      component: Border,
    }, {
      path: "/Radius",
      component: Radius,
    }, {
      path: "/Background",
      component: Background,
    }, {
      path: "/FontFace",
      component: FontFace,
    }, {
      path: "/Gradients",
      component: Gradients,
    }, {
      path: "/TwoD",
      component: TwoD,
    }, {
      path: "/ThreeD",
      component: ThreeD,
    },
    {
      path: "/Text",
      component: Text,
    },
    {
      path: "/preview",
      component: Preview,
    },
  ]
})