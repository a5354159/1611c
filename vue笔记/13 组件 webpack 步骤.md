#### 一键生成 webpack
1、npm i -g vue-cli

2、vue -V

3、vue init webpack myVue(一路no)

4、cd myVue\

5、npm start

##### 组件分为 全局和局部

Vue.component('test',{

    template:<div>hello</div>
    modules:{
        fn(){
            alert('click')
        }
    },
    components:{
        child:{
            template:`<h2>hello2</h2>`
        }
    }
})

let vm = new Vue({
    
})