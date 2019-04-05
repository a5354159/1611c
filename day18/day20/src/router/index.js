import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/main' },
        {
            path: '/main',
            name: 'main',
            component: () =>
                import ('@/views/shou.vue')
        }, {
            path: '/classify',
            name: 'classify',
            component: () =>
                import ('@/views/classify.vue')
        }, {
            path: '/fa',
            name: 'fa',
            component: () =>
                import ('@/views/fa.vue')
        }, {
            path: '/shopping',
            name: 'shopping',
            component: () =>
                import ('@/views/shopping.vue')
        }, {
            path: '/my',
            name: 'my',
            component: () =>
                import ('@/views/my.vue')
        }
    ]
})