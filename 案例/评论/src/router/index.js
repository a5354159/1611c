import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
            path: "/",
            redirect: '/dt/left' //重定向
        }, {
            path: "/dt",
            redirect: '/dt/left'
        },
        {
            path: "/dt", //动态路由
            component: () =>
                import ("../components/page/index.vue"),
            children: [{ //二级路由
                    path: "left",
                    component: () =>
                        import ("../components/page/left.vue")
                },
                {
                    path: "center",
                    component: () =>
                        import ("../components/page/center.vue")
                },
                {
                    path: "right",
                    component: () =>
                        import ("../components/page/right.vue")
                }

            ]
        },
        {
            path: "/detail",
            component: () =>
                import ("../components/detail.vue")
        },
        {
            path: "/message",
            component: () =>
                import ("../components/message.vue")
        }
    ]
});