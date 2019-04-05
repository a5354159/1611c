<template>
    <div>
        <el-header></el-header>
        <swiper class="banner" :options="{autoplay:true,loop:true}">
            <swiper-slide v-for="(val,i) in swiperlist" :key="i">
                <img :src="val.ad_pic_url" alt="">
            </swiper-slide>
        </swiper>
        <div class="nav-list">
            &nbsp;&nbsp;本周最火
        </div>
        <main>
            <el-dl v-for="(val,i) in dldata" :key="i"
                :img="val.cover"
                :title="val.title"
                :id="val.fiction_id"></el-dl>
        </main>
    </div>
</template>

<script>
import elHeader from "../components/elHeader"
import elDl from "../components/elDl"

export default {
    data(){
        return {
            swiperlist:[],
            dldata:[]
        }
    },
    components:{
        elHeader,
        elDl
    },
    created(){
        this.http.get("/getswiper").then((data)=>{
            this.swiperlist = data.data.items[0].data.data
            this.dldata = data.data.items[1].data.data
        })
    }
}
</script>
<style scoped  lang="scss">
.banner{
    width:100%;
    height:170px;
    img{
        width:100%;
        height:170px;
    }
}
.nav-list{
    width:100%;
    height:50px;
    border-bottom:1px solid #fff;
    font-style: "微软雅黑";
    font-size:19px;
    line-height: 50px;
}
main{
    flex:1;
    overflow: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

</style>