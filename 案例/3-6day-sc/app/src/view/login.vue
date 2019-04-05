<template>
 <div class="inp">
       <div class="list">
           <form action="">
               <input type="checkbox"> <label for="">书名/最近更新章节</label>
           </form>
           <p><span>更新时间</span><span>作者</span></p>
           
       </div>
       <div class="add" v-for="(item,index) in list" :key="index">
             <form action="">
               <input type="checkbox"> <label for="">{{item.title}}</label>
           </form>
           <p><span>{{item.score}}时前</span><span>{{item.author}}</span><button @click="del(index)">删除</button></p>
       </div>
   </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    methods:{
        del(index){
            let delIndex=this.list.findIndex(item=>item.shop===index)
            this.list.splice(delIndex,1)
             window.localStorage.setItem('code',JSON.stringify(this.list))
        }

    },
    created(){
        let dl=JSON.parse(window.localStorage.getItem('code'))|| []
        console.log(dl)
        this.list=dl
        console.log(this.list)
        
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
    *{
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}
    .inp{
        width: 100%;
        height: auto;
        padding: 0 15px;
        .list{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            align-items: center;
             border-bottom: 1px solid #ccc;
        }
       
    }
    .add{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            align-items: center;
            border-bottom: 1px solid #ccc;
    }
</style>