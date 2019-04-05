import Vue from 'vue'
import App from './App'
import router from './router'
import Plugins from './plugins' //自定义插件
Vue.config.productionTip = false


Vue.use(Plugins) //注册路由
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})