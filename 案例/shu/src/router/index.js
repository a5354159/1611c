import Vue from 'vue'
import Router from 'vue-router'
import bookCity from '../view/bookCity'
import bookshelf from '../view/bookshelf'
import dateil from '../view/dateil'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'bookCity',
        component: bookCity
    }, {
        path: '/bookshelf',
        name: 'bookshelf',
        component: bookshelf
    }, {

        path: '/dateil/:id',
        name: 'dateil',
        component: dateil

    }]
})