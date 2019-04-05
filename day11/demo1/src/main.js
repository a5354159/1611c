import App from './App';

import Vue from 'vue';

console.log(App, Vue);

new Vue({
    el: '#app',
    template: '<App />',
    components: {
        App
    }
    // render(func) {
    //     console.log(func);
    //     return func(App);
    // }
    // render: h => h(App)
});