import Vue from 'Vue'
import index from 'index'
let vm = new Vue({
    // el: '#main',
    data: {
        tex: '1611C'

    },
    template: '<h2>{{tex}}-------{{arr()}}</h2>',
    methods: {
        arr() {
            return 250
        }

    },
    beforeCreate() {
        console.log(this.$el, this.$data, this.$methods)
    },
    created() {
        console.log(this.$el, this.$data, this.$methods)
    },
    beforeMount() {
        console.log(this.$el, this.$data, this.$methods)
    },
    mounted() {
        console.log(this.$el, this.$data, this.$methods)
    },
    beforeUpdate() {
        console.log(this.$el, this.$data, this.$methods)
    },
    update() {
        console.log(this.$el, this.$data, this.$methods)
    }
})
window.vm = vm;
vm.$mount('#main')