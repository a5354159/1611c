<template>
    <div class="banner">
        <el-carousel :interval="4000" class="pic">
            <el-carousel-item v-for="item in carouselList" :key="item.id" :data="songsList">
                <img :src="item.picUrl" class="img-responsave">
            </el-carousel-item>
        </el-carousel>
        <div class="songlist">
            <scroller scrollerWrap="scrollerRank" :scrollbar="true">
                <ul>
                        <!-- <router-link v-for="(items,index) in songsList" :key="`detail${index}`" :to="`/music/rank/${items.data.albummid}.html`">  -->
                    <router-link v-for="(items,index) in songsList" :key="`detail${index}`" :to="{path:'/music/rankDetail',query:{id:items.data.albummid,info:items.data.songname}}">
                        <li >
                            <dl>
                                <dt>
                                    <img :src="`https://y.gtimg.cn/music/photo_new/T002R90x90M000${items.data.albummid}.jpg?max_age=2592000`">
                                </dt>
                                <dd>
                                    <h4 v-text="items.data.songname"></h4>
                                    <span v-for="aut in items.data.singer">{{aut.name}}</span>
                                </dd>
                            </dl>
                        </li>
                    </router-link> 
                </ul>
             </scroller>
        </div>
    </div>
</template>
<script>
    import {getCarouselList,getSongsList} from "common/rank";
    import scroller from "../scroll/scroller.vue";
    export default {
        name:"app",
        data(){
            return{
                carouselList:[],
                songsList:[]
            }
        },
        mounted(){
            this._getCarouselList();
            this._getSongsList();
        },
        methods:{
            _getCarouselList(){
                getCarouselList().then(res=>{
                    this.carouselList=res.data.results
                }).catch(err=>{
                    console.log(err)
                })
            },
            _getSongsList(){
                getSongsList().then(res=>{
                    this.songsList=res.songlist
                })
            }
        },
        components:{
            scroller
        }
    }
</script>
<style scoped>
    .pic{
        background: #fff;
        width:100%;
        height:128px;
        z-index: 999;
    }
    .songlist{
        flex:1;
        height:100%;
        display: flex;
        flex-direction: column;
        margin-top:10px;
    }
    ul{
        list-style:none;
        padding:0;
        padding:0 20px;
        margin-top:10px;
        height:100%;
        flex:1;
    }
    ul li dl{
        display:flex;
    }
    ul li img{
        display:block;
        width:80px;
    }
    ul li dd {
        margin-left:10px;
    }
</style>