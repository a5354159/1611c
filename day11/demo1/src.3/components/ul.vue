<template>
    <ul>
        <list v-for="(item,index) in arr" :key="index" :index="index" :title="item.title" :count="item.count" @addClick="clickFn"></list>
    </ul>
</template>
<script>
import list from './list';
export default {
    data(){
        return{
            arr:[{
                title:'苹果',
                count:1
            },{
                title:"香蕉",
                count:2
            }]
        }
    },
    components:{
        list
    },
    methods: {
        clickFn(index,count,type){
            console.log(index,this.arr[index].count);
            this.arr[index].count++;
        // this.$set('arr',index,10);
        }
    },
}
</script>
