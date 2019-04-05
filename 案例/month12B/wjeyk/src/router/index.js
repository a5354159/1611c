import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/view/home')
    },
    {
      path: '/type',
      name: 'type',
      component: () => import('@/view/type')
    },
    {
      path: '/my/:title',
      name: 'my',
      component: () => import('@/view/my')
    },
    {
      path: '/wode',
      name: 'wode',
      component: () => import('@/view/wode')
    }
  ]
})
