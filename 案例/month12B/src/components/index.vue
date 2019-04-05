<template>
  <main>
    <header><h3>爱鲜蜂-30分钟掌上便利</h3></header>
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/static/banner.PNG" alt=""></div>
        <div class="swiper-slide"><img src="/static/banner.PNG" alt=""></div>
        <div class="swiper-slide"><img src="/static/banner.PNG" alt=""></div>
      </div>
    </div>
    <h4>本周特价</h4>
    <div class="scroll">
      <div class="content">
        <dl class="info" v-for='(i,ind) in data' :key="ind">
          <dt><img :src="i.img" alt=""></dt>
          <dd>
            <p>{{i.tit}}</p> 
            <div class="bot">
              <span>￥{{i.price}}</span>
              <p @click="bus.$emit('addcar',i)"><img src="/static/ycar.PNG" alt=""></p>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </main>
</template>
<script>
    import Swiper from 'swiper';
    import Bscroll from 'better-scroll';
    import 'swiper/dist/css/swiper.min.css';
    import axios from 'axios';
    export default {
        data() {
            return {
                data: []
            }
        },
        created() {
            axios.get('/api/data').then((res) => {
                this.data = res.data
            })
        },
        mounted() {
            new Swiper('.banner', {
                autoplay: {
                    delay: 1000
                }
            });
            new Bscroll('.scroll', {
                click: true,
                scrollX: true
            })
        },
    };
</script>
<style scoped>
    .info dt img {
        width: 60px;
        height: 80px;
    }
    
    html,
    body,
    main {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .content,
    .scroll {
        display: flex;
    }
    
    .info {
        width: 160px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .banner img {
        margin-left: 20px;
    }
</style>