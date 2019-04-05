import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/classify',
            name: 'classify',
            component: () =>
                import ('@/views/classify')
        }, {
            path: '/shop',
            name: 'shop',
            component: () =>
                import ('@/views/shop')
        }, {
            path: '/me',
            name: 'me',
            component: () =>
                import ('@/views/me')
        }, {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home')
        }
    ]
})