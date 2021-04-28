import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('../components/HomePage.vue');
const HelloWorld = () => import('../components/HelloWorld.vue');

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
      // redirect: '/HelloWorld',
      children: [
        {
          path: 'HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            title: 'HelloWorld'
          }
        },
        {
          path: 'indexPage',
          name: 'indexPage',
          component: () => import('../pages/views/indexPage.vue'),
          meta: {
            title: '工作台'
          }
        },
        {
          path: 'border',
          name: 'border',
          component: () => import('../pages/border.vue')
        },
        {
          path: 'Radius',
          name: 'Radius',
          component: () => import('../pages/radius.vue')
        },
        {
          path: 'Background',
          name: 'Background',
          component: () => import('../pages/background.vue')
        },
        {
          path: 'FontFace',
          name: 'FontFace',
          component: () => import('../pages/fontFace.vue')
        },
        {
          path: 'Gradients',
          name: 'Gradients',
          component: () => import('../pages/Gradients.vue')
        },
        {
          path: 'Text',
          name: 'Text',
          component: () => import('../pages/text.vue')
        },
        {
          path: 'TwoD',
          name: 'TwoD',
          component: () => import('../pages/2D.vue')
        },
        {
          path: 'ThreeD',
          name: 'ThreeD',
          component: () => import('../pages/3d.vue')
        },
        // 函数防抖
        {
          path: 'ShakeProof',
          name: 'ShakeProof',
          component: () => import('../pages/views/shakeProof.vue')
        },
        //图片预览
        {
          path: 'Preview',
          name: 'Preview',
          component: () => import('../pages/views/preview.vue')
        },
        //html2canvas
        {
          path: 'html2canvas',
          name: 'html2canvas',
          component: () => import('../pages/views/html2canvas.vue')
        },
        //imageNum
        {
          path: 'imageNum',
          name: 'imageNum',
          component: () => import('../pages/views/imageNum.vue')
        },
        //把数组变成而为数组
        {
          path: 'twoArray',
          name: 'twoArray',
          component: () => import('../pages/views/twoArray.vue')
        },
        //动态改变div长度
        {
          path: 'divLength',
          name: 'divLength',
          component: () => import('../pages/views/divLength.vue')
        },
        //element table相关
        {
          path: 'tablePage',
          name: 'tablePage',
          component: () => import('../pages/views/tablePage.vue')
        },
        //element 层级联动多选相关
        {
          path: 'Cascader',
          name: 'Cascader',
          component: () => import('../pages/views/Cascader.vue')
        },
        {
          path: '*',
          name: 'error',
          component: () => import('../components/404.vue'),
          meta: {
            title: '页面没找到'
          }
        },
      ]
    },
  ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}