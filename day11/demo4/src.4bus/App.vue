<template>
    <div id="app">

      <my-content v-for="(item,index) in list" 
      :key="index" 
      :num="item.num"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      >
      </my-content>
      <div>
         总价：{{sum}} 总数:
      </div>
    </div>
</template>
<script>
import myContent from './components/my-content';
import Eventbus from './js/eventbus';
export default {
  data(){
    return {
       list:[{
                num:1,
                price:5,
                title:'苹果',
                id:1
            },{
                num:1,
                price:2,
                title:'香蕉',
                id:2
            }],
        buyList:[]
    }
  },
  created() {
    Eventbus.$on('addCount',(num,id)=>{
      console.log(num,id);
      let index = this.list.findIndex(item => item.id == id);
      let isBuy = this.buyList.findIndex(bitem => bitem.id == id);
      this.list[index].num = num;
      console.log(isBuy,'isBUg');
      if(isBuy == -1){
        this.buyList.push(this.list[index]);
      }
    });
  },
  components:{
    myContent
  },
  computed: {
    sum(){
      console.log(this.buyList,'sum');
      return this.buyList.reduce((pre,cur) => {
                return pre + cur.num
      },0)
      // return this.buyList.reduce((a,b) => {a+b.num});
    }
  },
}


</script>


