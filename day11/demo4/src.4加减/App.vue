<template>
    <div id="app">
        <myList v-for="(item,index) in list" :key="index" :title="item.title" :num="item.num" :price="item.price" :id="item.id"></myList>
        <footer>
          <span>总价：{{totalPrice}}</span>
          <span>总数：{{totalCount}}</span>
        </footer>
    </div>
</template>
<script>
import myList from './components/my-list';
import EventBus from './js/eventbus';
export default {
  data(){
    return {
      list:[{
        title:'苹果',
        id:1,
        num:0,
        price:2
      },{
        title:'香蕉',
        id:2,
        num:0,
        price:3
      }],
      sumList:[]
    }
  },
  created() {
    EventBus.$on('addCount',(num,id)=>{
      console.log(num,id);
      let index = this.list.findIndex(item => item.id == id);
      let sumIndex = this.sumList.findIndex(item1 => item1.id == id);
       this.list[index].num = num;
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
      return this.sumList.reduce((prev,next)=>{
        return  prev + next.num
      },0);
    },
    totalPrice(){
       return this.sumList.reduce((prev,next)=>{
        return  prev + next.price*next.num
      },0);
    }
  },
}
</script>



