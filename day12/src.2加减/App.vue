<template>
  <div id="app">
    <my-list v-for="(item,index) in list" 
    :key="index" 
    :title="item.title"
    :num="item.num"
    :price="item.price"
    :id="item.id"
    ></my-list>
    <footer>
      <span>总价：{{totalPrice}}</span>
      <span>总数：{{totalCount}}</span>
    </footer>
  </div>
</template>
<script>
import myList from './components/my-list';
// import EventBus from './js/eventbus';
export default {
  data(){
    return{
      list:[
        {
          title:"苹果",
          num:0,
          price:2,
          id:1
        },{
          title:"香蕉",
          num:0,
          price:3,
          id:2
        }
      ],
      sumList:[]
    }
  },
  created() { 
    console.log(this);
    this.$bus.$on('addCount',(num,id)=>{
      console.log(num,id);
      let index = this.list.findIndex(item => item.id == id);
      this.list[index].num= num;
      let sumIndex = this.sumList.findIndex(item1 => item1.id == id);
      console.log(sumIndex);
      if(sumIndex == -1){
        this.sumList.push(this.list[index]);
      }
      console.log(this.sumList);
    });
  },

  components:{
    myList
  },
  computed: {
    totalCount(){
      console.log(this.sumList);
      return this.sumList.reduce((prev,cur)=>{
        return prev + cur.num;
      },0);
    },
    totalPrice(){
       return this.sumList.reduce((prev,cur)=>{
        return prev + cur.num * cur.price;
      },0);
    }
  },
}
</script>