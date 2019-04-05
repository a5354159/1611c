<template>
    <div>
        <b-Header></b-Header>
        <swiper class="banner" :options="{autoplay:true,loop:true}">
            <swiper-slide v-for="(item,index) in swiperlist" :key="index">
                <img :src="item.ad_pic_url" alt="">
            </swiper-slide>
        </swiper>
        <div class="nav-list">
            &nbsp;&nbsp;本周最火
        </div>
        <main>
            <b-Dl v-for="(item,index) in dldata" :key="index"
                :img="item.cover"
                :title="item.title"
                :id="item.fiction_id"></b-Dl>
        </main>
    </div>
</template>
<script>
import bHeader from '../components/bHeader'
import bDl from '../components/bDl'
export default {
    props:{

    },
    components:{
        bHeader,
        bDl
    },
    data(){
        return {
            swiperlist:[],
            dldata:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.http.get('/getswiper').then((data)=>{
            this.swiperlist = data.data.items[0].data.data
            this.dldata = data.data.items[1].data.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
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