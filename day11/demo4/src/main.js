import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
    // Vue.prototype.$bus = new Vue();
    /* eslint-disable no-new */
Vue.directive('bg', {
    inserted(el, obj) {
        console.log(el, obj);
        el.style.background = obj.value;

    }
});
Vue.directive('img', {
    inserted(el, obj) {
        console.log(el, obj);
        let color = Math.floor(Math.random() * 1000000);
        el.style.background = '#' + color;

        let img = new Image();
        img.src = obj.value;
        img.onload = () => {
            el.style.backgroundImage = 'url(' + obj.value + ')';
            el.style.backgroundSize = '100% 100%';
        }
    }
});
new Vue({
    el: '#app',
    render: h => h(App)
})