import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/view/home'
// import Bookcity from '@/view/bookcity'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home.vue')
        }, {
            path: '/bookcity',
            name: 'bookcity',
            component: () =>
                import ('@/views/bookcity.vue')
        }, {
            path: '/seach',
            name: 'seach',
            component: () =>
                import ('@/views/shou.vue')
        }
    ]
})