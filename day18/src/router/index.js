import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/view/shouye'
import Car from '@/view/car'
import Mcar from '@/view/Mcar'
import Wode from '@/view/wode'


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'shouye',
        component: Shouye
    }, {
        path: '/car',
        name: 'car',
        component: Car
    }, {
        path: '/mcar',
        name: 'mcar',
        component: Mcar
    }, {
        path: '/wode',
        name: 'wode',
        component: Wode
    }]
})