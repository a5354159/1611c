<template>
    <div class="con">
        <div class="nav-wrap">
            <ul class="nav-list" ref="navList" :style="{width:navWidth+'px'}">
                <li :class="{active:active === i}" v-for="(item,i) in banner" :key="i">{{item.Linkage}}</li>
            </ul>
        </div>
		<div class="box">
			<swiper :options="swiperOption" class="banner">
				<!-- slides -->
				<swiper-slide v-for="(item,i) in banner" :key="i">
					<img :src="item.ImageUrl" @click="$router.push({name:'list',params:{type:item.Type,LabelName:item.LabelName}})">
				</swiper-slide>
			</swiper>
		</div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    data(){
        let me = this;
        return {
            banner:[],
            navWidth:0,
            swiperOption:{
                slidesPerView: 1.6,
                spaceBetween: 30,
                centeredSlides: true,
                on: {
                    slideChangeTransitionStart: function(){
                        me.active = this.activeIndex;
                        me.scroll.scrollToElement(me.lis[me.active])
                    }
                }
            },
            active:0,
            lis:[]
        }
    },
    created(){
        this.$http.get('/api/banner').then(res => {
            if(res.data.code === 1){
                this.banner = res.data.data.BannerList;
                this.$nextTick(() => {
                    this.lis = Array.from(this.$refs.navList.children);
                    this.lis.forEach(item => {
                        this.navWidth += item.offsetWidth;
                    })
                    this.scroll = new BetterScroll('.nav-wrap',{
                        click:true,
                        scrollX:true
                    })
                })
            }
        })
    }
}
</script>
<style lang="scss">
    .nav-wrap{
        width:100%;
        margin-bottom: 20px;
        overflow: hidden;
        ul{
            display: flex;
        }
        li{
            margin:0 10px;
            height:40px;
            line-height: 40px;
            flex-shrink: 0;
            &.active{
                color:red;
            }
        }
    }
	.box{
		width: 100%;
		height: 100%;
	}
    .banner{
        img{
            width:100%;
			border-radius: 20px;
        }
    }
    .active{
        color:red;
		border-bottom: 1px solid red;
    }
</style>
