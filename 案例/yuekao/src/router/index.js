import Vue from 'vue'
import Router from 'vue-router'
import create from '@/view/create'
import createForm from '@/view/createForm'
import list from '@/view/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'create',
        component: create
    },
    {
        path: '/createForm',
        name: 'createForm',
        component: createForm
    },
    {
        path: '/list',
        name: 'list',
        component: list
    }
  ]
})
