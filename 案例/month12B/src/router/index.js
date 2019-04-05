import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.prototype.bus = new Vue()
Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
        path: '/',
        component: () =>
            import ('../components/index')
    }, {
        path: '/car',
        component: () =>
            import ('../components/car')
    }]
});