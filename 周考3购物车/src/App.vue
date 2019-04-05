<template>
  <div id="app">
      <div class="content">
        <ul class="left">
          <li v-for="(item,index) in classify" :key="index" :class="{'active': index == ind}" @click="change(index,item.type)">{{item.title}}</li>
        </ul>
        <div class="right">
            <my-list v-for="(item1,index1) in list" 
            :key="index1" 
            :title="item1.title"
            :price="item1.price"
            :num ="item1.num"
            :id="item1.id"
            :type="item1.type"
            ></my-list>
        </div>
      </div>
      <footer>
          <Dialog v-show="isShow" :buyList="buyList"> </Dialog>
          <div @click="showdialog">
            总数：<span>{{totalCount}}</span>
            总价:<span>{{totalPrice}}</span>
          </div>
      </footer>
  </div>
</template>

<script>
import myList from './components/my-list';
import Dialog from './components/dialog';
import classify from './js/data';
import list from './js/list';
export default {
  name: 'App',
  data(){
    return {
      classify:[],
      list:[],
      buyList:[],
      ind:0,
      isShow:false
    }
  },
  created() {
    this.classify = classify;
    this.list = this.getList(list,this.classify[0].type);
    this.$bus.$on('addCount',(num,id,type)=>{
       this.list = this.getList(list,type);
       let index = this.list.findIndex(item => item.id == id);
       let ind = this.buyList.findIndex(item => item.id == id);
       if(ind == -1){
         this.buyList.push(this.list[index]);
       }
       this.list[index].num = num;
       let i = this.classify.findIndex(items=>items.type == type);
       this.ind = i;
    });
  },
  components:{
    myList,
    Dialog
  },
  methods: {
    //晒选数据
    getList(list,type){
      return list.filter(item => item.type == type);
    },
    //点击切换的时候
    change(index,type){
      this.ind = index;
      this.list = this.getList(list,type);
    },
    showdialog(){
      this.isShow = !this.isShow;
    }
  },
  computed: {
    totalCount(){ 
      return this.buyList.reduce((prev,cur)=>{
        return prev + cur.num
      },0);
    },
    totalPrice(){
      return this.buyList.reduce((prev,cur)=>{
        return prev + cur.num * cur.price
      },0);
    }
  },
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.content{
  flex: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
}
.left{
  width: 120px;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid #ccc;
}
.left li{
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #ccc;
  text-align: center;

}
.left li.active{
  color: red;
}
.right{
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
footer{
  height: 50px;
  width: 100%;
  border-top: 1px solid #ccc;
}



</style>
