import VueRouter from 'vue-router';
import Vue from 'vue';
import Bind from '../views/bind';
import Add from '../views/add';
import Del from '../views/del';
import Update from '../views/update';
import Seach from '../views/seach';
import Shop from '../views/shop';
import Dican from '../views/dican';
import Conts from '../views/conts';
import Pinlun from '../views/pinlun';
Vue.use(VueRouter);


const routes = [{
        path: '/',
        redirect: '/bind'
    },

    {
        name: 'bind',
        path: '/bind',
        component: Bind
    }, {
        name: 'add',
        path: '/add',
        component: Add
    }, {
        name: 'del',
        path: '/del',
        component: Del
    }, {
        name: 'update',
        path: '/update',
        component: Update
    }, {
        name: 'seach',
        path: '/seach',
        component: Seach
    }, {
        path: '/shop/:id',
        name: 'shop',
        component: Shop,
        children: [{
                path: 'dican',
                name: 'dican',
                component: Dican,
            },
            {
                path: 'conts',
                name: 'conts',
                component: Conts,
            },
            {
                path: 'pinlun',
                name: 'pinlun',
                component: Pinlun,
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
export default router