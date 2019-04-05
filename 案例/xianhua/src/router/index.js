import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import classify from '@/view/classify'
import list from '@/view/list'
import my from '@/view/my'
Vue.use(Router)

let router =  new Router({
  routes: [
    {
        path:'/',
        name:'home',
        component:home
    },
    {
        path:'/classify',
        name:'classify',
        component:classify
    },
    {
        path:'/list/:type/:LabelName',
        name:'list',
        component:list
    },
    {
        path:'/my',
        name:'my',
        component:my
    }
  ]
})

export default router;

