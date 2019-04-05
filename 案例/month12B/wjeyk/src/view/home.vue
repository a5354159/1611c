<template>
    <div>
        <header>花礼网鲜花</header>
        <section>
            <div class="banner">
                <img :src="banner.TopPic" alt="">
            </div>
            <div class="lun">
                <ul>
                    <li :class="{active:index===i}" v-for="(v,i) in banner.BannerList" :key="i">{{v.Linkage}}</li>
                </ul>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(v,i) in banner.BannerList"
                        :key="i"
                         @click="add(i)"
                        >
                        <img :src="v.ImageUrl" alt="">
                        <div class="tu">
                            <p>{{v.LabelName}}</p>
                            <p>{{v.Desc}}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <foote></foote>        
    </div>
</template>

<script>

import foote from '@/components/footer'
import banner from '@/data/banner'
import Swiper from 'swiper'
export default {
  name: 'App',
  components:{
    foote
  },
  data() {
      return {
          banner,
          index:0
      }
  },
  methods: {
    add(i){
        this.index=i
        setTimeout(() => {
            this.$router.push(`/my/${this.banner.BannerList[i].LabelName}`)
        }, 500);
    }
  },
  created() {
      console.log(banner)
      this.$nextTick(()=>{
          new Swiper('.swiper-container',{
              autoplay:true,
          })
      })
  },
}
</script>
<style scoped  lang="">
.banner{
    width: 100%;
}
.banner img{
    width: 100%;    
}
header{
    width: 100%;
    height: 35px;
    background: pink;
    text-align: center;
    line-height: 35px;
}
.lun{
    width: 100%;
    overflow: hidden;
}
.lun>ul{
    width: 100%;
    overflow-x:auto;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid pink;
    margin-bottom: 20px;
}
.lun>ul li.active{
    color: red;
    border-bottom: 2px solid red;
}
.swiper-container,.swiper-wrapper{
    width: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide {
    width: 100%;
     display: flex;
    justify-content: center;
    position: relative;
}
.swiper-container .swiper-wrapper .swiper-slide img{
    width: 90%;
    height: 500px;
    border-radius: 30px;
}
.swiper-container .swiper-wrapper .swiper-slide .tu{
    position: absolute;
    bottom: 50px;
    line-height: 30px;
    text-align: center;
}
.swiper-container .swiper-wrapper .swiper-slide .tu p{
    color:#fff;
    font-size: 20px;
    font-weight: bold;
}
</style>