import Vue from 'vue'
import Router from 'vue-router'
import list from '@/view/list'
import add from '@/view/add'
import tucp from '@/view/tucp'
import login from '@/view/login'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'list',
            component: list
        }, {
            path: '/add/:id',
            name: 'add',
            component: add
        },

        {
            path: '/tucp/:id',
            name: 'tucp',
            component: tucp
        }, {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})