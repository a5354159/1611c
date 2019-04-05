import Vue from 'vue'
import Router from 'vue-router'
import myShu from '../components/myshu'
import myZhu from '../components/myzhu'
import myNai from '../components/mynai'
import myCe from '../components/myce'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/zhu'
    }, {
        path: '/zhu',
        component: myZhu
    }, {
        path: '/nai',
        component: myNai
    }, {
        path: '/shu',
        component: myShu
    }, {
        path: '/ce',
        component: myCe
    }]
})