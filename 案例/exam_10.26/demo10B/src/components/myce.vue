<template>
    <div class="myce">
        <header class="header">
            <p>
                <span class="back" @click="$router.back()">
                    <i class="icon iconfont icon-xiangzuo"></i>
                </span>
                食物健康评测
            </p>
            <div class="icon-box">
                <i class="icon iconfont icon-share"></i>
                <i class="icon iconfont icon-zanting6"></i>
            </div>
        </header>
        <div class="category">
            <div class="item" v-for="(val,index) in jianyi" :key="index" @click="changeCe(index)" :class="{active:index==ind}">
                <h2>{{val.count}}</h2>
                <p>{{val.title}}</p>
            </div>
        </div>
        <div class="info-list">
            <div class="info-item" v-for="(val,index) in showList" :key="index">
                <div class="top">
                    <img :src="val.imgUrl" alt="">
                    <span>{{val.name}}</span>
                </div>
                <div class="info">
                    <p>{{val.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const storage = window.localStorage;
export default {
  name: "myce",
  data() {
    return {
      jianyi: [
        {
          count: 0,
          title: "建议少吃"
        },
        {
          count: 0,
          title: "适量食用"
        },
        {
          count: 0,
          title: "放心食用"
        }
      ],
      ind: 0,
      myCeList: JSON.parse(storage.getItem("myce")) || [],
      showList: []
    };
  },
  mounted() {
    this.showList = this.myCeList.filter(item => {
      return item.category_id == this.ind + 1;
    });
    this.myCeList.forEach(item => {
      if (item.category_id == 1) {
        this.jianyi[0].count++;
      } else if (item.category_id == 2) {
        this.jianyi[1].count++;
      } else {
        this.jianyi[2].count++;
      }
    });
  },
  methods: {
    changeCe(i) {
      this.ind = i;
      if (i == 0) {
        this.showList = this.myCeList.filter(item => {
          return item.category_id == 1;
        });
      } else if (i == 1) {
        this.showList = this.myCeList.filter(item => {
          return item.category_id == 2;
        });
      } else {
        this.showList = this.myCeList.filter(item => {
          return item.category_id == 3;
        });
      }
    }
  }
};
</script>
<style>
.myce {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  overflow: auto;
}
.myce .category {
  width: 100%;
  padding: 15px;
  display: flex;
}
.myce .category .item {
  flex: 1;
  text-align: center;
  line-height: 2;
}
.myce .category .item h2,
.myce .category .item p {
  color: #999;
}
.myce .category .item.active h2,
.myce .category .item.active p {
  color: #333;
}
.myce .info-list {
  width: 100%;
  padding: 15px 10px;
  background: #eee;
}
.myce .info-list .info-item {
  width: 100%;
  padding: 30px;
  border: 1px solid #ccc;
  background: #fff;
}
.myce .info-list .info-item .top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
}
.myce .info-list .info-item .top img {
  width: 40px;
  height: 40px;
}
.myce .info-list .info-item .top span {
  padding: 0 10px;
  font-weight: 800;
}
.myce .info-list .info-item .info {
  width: 100%;
  padding-top: 10px;
}
.myce .info-list .info-item .info p {
  color: #555;
}
</style>


