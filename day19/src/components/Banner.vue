<template>
      <div class="banners">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../../static/banner.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../static/banner.png" alt=""></div>
                    </div>
                </div>
            </div>
</template>
<style>
.banners{
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.swiper-slide img{
    width: 100%;
    /* height: 140px; */
}
</style>
<script>
import Swiper from 'swiper'
export default {
    data(){
        return  {

        }
    },
     created(){
       this.$nextTick(()=>{
           new Swiper('.swiper-container')
       })
    }
}
</script>
