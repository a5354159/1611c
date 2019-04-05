<template>
  <div id="app">
    <my-header></my-header>
    <my-list></my-list>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myList from './components/myList'
import myFooter from './components/myFooter'

export default {
  name: 'app',
  data () {
    return {
      classify:[],
      product:[],
      products:[],
      ind:0  
    }
  },
  components:{
    myHeader,
    myList,
    myFooter
  },
  
   data(){
        return {
           
        }
    },
    created(){
        this.classify = classify;
        this.$http.get('/api/classify').then((res)=>{
            this.classify = res.data;
            console.log(this.classify)
        })
        this.$http.get('/api/product').then((res)=>{
           this.product = res.data
        })
    },
    methods:{
      getLIst(index,type){
        return 
      },
      fn(id){
        const products= this.product.filter((item)=>{
                return item.type==id;
              })
                this.products=products;
            }
            
    }
}
</script>

<style lang="scss">
@import './scss/_minix.scss';
@import './scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include box_flex;
  @include direction(column);
  width:100%;
  height: 100%;
  overflow: hidden;
}
</style>
