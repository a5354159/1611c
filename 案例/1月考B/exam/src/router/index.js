import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
            path: '/', //菜单路由
            component: () =>
                import ('../components/index')
        },
        {
            path: '/car', //登录路由
            component: () =>
                import ('../components/car')
        }
    ]
});