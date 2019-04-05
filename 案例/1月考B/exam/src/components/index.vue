<template>
  <main>
    <header>
      <h2>luckin coffee</h2>
    </header>
      <div class="banner">
        <img src="/static/banner.PNG" alt="">
      </div>
    <section>
      <ul class="tab">
        <li v-for='(i,ind) in data':class='i.state' @click='tabFn(ind)'>{{i.name}}</li>
      </ul>
      <div class="content">
        <dl class="info" v-for='item in list'>
          <dt><img :src="item.img" alt=""></dt>
          <dd>
            <h4>{{item.name}}</h4>
            <div>Lychee Exfreezo</div>
            <p><span>￥{{item.price}}</span><span class="addBtn" @click='markFn(item)'>+</span></p>
          </dd>
        </dl>
      </div>
    </section>
    <footer>
        <dl>
            <dt><img src="/static/sy.PNG" alt=""></dt>
            <dd>首页</dd>
        </dl>
        <dl>
            <dt><img src="/static/sy.PNG" alt=""></dt>
            <dd>菜单</dd>
        </dl>
        <dl>
            <dt><img src="/static/sy.PNG" alt=""></dt>
            <dd>订单</dd>
        </dl>
        <router-link tag='dl' to='/car'>
            <dt><img src="/static/car.PNG" alt=""></dt>
            <dd>购物车</dd>
        </router-link>
        <dl>
            <dt><img src="/static/sy.PNG" alt=""></dt>
            <dd>我的</dd>
        </dl>
    </footer>
      <Mark v-if='state' :itemData='itemData'/>
  </main>
    
</template>
<script>
    import data from '../../mock/list.js';
    import Mark from './mark.vue'
    export default {
        components: {
            Mark
        },
        data() {
            return {
                data: [], //总数据
                list: [], //每一列表数据
                state: false, //控制遮罩显示隐藏
                itemData: {} //点击+传到遮罩层
            }
        },
        created() {
            this.data = data;
            this.list = this.data[0].content;
            this.data[0].state = 'active'
        },
        methods: {
            tabFn(ind) {
                this.list = this.data[ind].content;
                this.data.forEach((i) => {
                    i.state = ''
                })
                this.data[ind].state = 'active';
            },
            markFn(i) {
                this.state = true;
                this.itemData = i;
            }
        },
    };
</script>
<style>
    .active {
        background: #fff;
    }
    
    section {
        flex: 1;
        display: flex;
    }
    
    .tab {
        width: 100px;
        height: 100%;
        background: #eee;
    }
    
    .info {
        display: flex;
        margin: 10px;
    }
    
    .tab li {
        height: 45px;
        line-height: 45px;
        text-align: center;
    }
    
    .info dt {
        width: 100px;
        height: 100px;
    }
    
    .info dd {
        margin-left: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .info p {
        display: flex;
        justify-content: space-between;
    }
    
    .addBtn {
        width: 20px;
        height: 20px;
        display: block;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        background: slategray;
        color: #fff;
    }
    
    .content {
        flex: 1;
        padding: 10px;
        box-sizing: border-box;
    }
    
    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    body,
    html {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    header {
        text-align: center;
        height: 45px;
        line-height: 45px;
    }
    
    .banner {
        width: 100%;
        height: 120px;
    }
    
    .banner img {
        width: 100%;
    }
    
    footer {
        width: 100%;
        height: 50px;
        position: fixed;
        background: #fff;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
    }
    
    footer dl {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    footer dl dt {
        width: 20px;
    }
    
    footer dl dt img {
        width: 100%;
    }
</style>