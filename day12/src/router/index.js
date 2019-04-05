import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/home';
import Detail from '../views/detail';
import List from '../views/list';
import Product from '../views/product';
Vue.use(Router);

const routes = [
    { name: '/', path: '/', component: Home },
    { name: '/detail', path: '/detail', component: Detail },
    { name: '/list', path: '/list', component: List },
    { name: '/product', path: '/product', component: Product },
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;