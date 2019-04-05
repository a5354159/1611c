<template>
<div>
    <my-header>
          <ul>
            <router-link to='/home' tag="li">书城</router-link>
            <router-link to='/bookcity' tag="li">书架</router-link>
        </ul>
        <span>我的</span>
    </my-header>
    <section>
       <Seach>
           <span @click="$router.push({path:'/seach'})">请输入/书名/作者/关键字</span>
       </Seach>
       <div class="swiper-conatiner con">
           <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="(item,index) in img" :key="index">
                   <img :src="item.ad_pic_url" alt="">
               </div>
           </div>
       </div>
       <div class="const">
         <h2>本周最热</h2>
         <my-list v-for="(item,index) in booxlist" :key="index"
         :imgs='item.cover'
         :tits='item.title'
         ></my-list>
        </div>
    </section>
</div>
    
</template>
<script>
import Swiper from 'swiper' 
export default {
    data(){
        return {
            img:[],
            booxlist:[]
        }
    },
    created(){
        this.$http.get('/api/booxlistt').then((res)=>{
            this.img = res.data.items[0].data.data;
            this.booxlist = res.data.items[1].data.data;

            this.$nextTick(()=>{
            new Swiper('.con',{
                autoplay:true
                })
            }) 
           
        })
       
        // this.$http.get('/api/boox').then((res)=>{
        //     console.log(res.data)
        //     this.obj = res.data.items
        // })
    }
}
</script>
<style>
section{
    overflow: hidden;
}
.swiper-slide>img{
    width: 100%;
    height: 150px;
}
.const{
    display: flex;
    flex-wrap: wrap;
}
.const>h2{
    width: 100%;
    height: 45px;
}
.const>dl{
    flex:1;
    margin: 10px;
}
.const>dl img{
    width: 80px;
    height: 80px;
}
dl>dd{
    font-size:12px; 
}
</style>
