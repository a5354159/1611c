import Vue from 'vue'
import App from './App'
import router from './router'
import Plugins from './plugins'
Vue.config.productionTip = false
Vue.use(Plugins);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})