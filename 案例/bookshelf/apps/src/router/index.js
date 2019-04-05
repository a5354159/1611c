import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'bookCity',
            component: () =>
                import ("../views/bookCity.vue")
        },
        {
            path: '/bookshelf',
            name: 'bookshelf',
            component: () =>
                import ("../views/bookshelf.vue")
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () =>
                import ("../views/detail.vue")
        }
    ]
})