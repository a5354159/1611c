<template>
  <div id="app">
    <header class="header">
      <p>食物健康评测</p>
      <div class="icon-box">
        <i class="icon iconfont icon-share"></i>
        <i class="icon iconfont icon-zanting6"></i>
      </div>
    </header>
    <div class="search">
      <input type="text" placeholder="搜索你今天吃的食物">
      <i class="icon iconfont icon-fangdajing"></i>
    </div>
    <main class="main">
      <my-cont></my-cont>
    </main>
    <footer class="footer" v-if="ceList.length>0">
      <div class="title">
        <span>已选食物({{ceList.length}})</span>
        <router-link tag="button" to="/ce">去测评</router-link>
      </div>
      <div class="select-cont">
        <p v-for="(val,index) in ceList" :key="index"><span>{{val.name}}</span><b @click="remove(index)">x</b></p>
      </div>
    </footer>
  </div>
</template>

<script>
import myCont from "./components/mycont";
const storage = window.localStorage;
export default {
  name: "App",
  components: {
    myCont
  },
  data() {
    return {
      ceList: JSON.parse(storage.getItem("myce")) || []
    };
  },
  mounted() {
    this.bus.$on("showCe", val => {
      let flag = this.ceList.some(item => {
        return item.name == val.name;
      });
      if (!flag) {
        this.ceList.push(val);
      } else {
        this.ceList = this.ceList.filter(item => {
          return item.name != val.name;
        });
      }
      storage.setItem("myce", JSON.stringify(this.ceList));
    });
  },
  methods: {
    remove(i) {
      let removeItem = this.ceList[i];
      this.bus.$emit("removeActive", removeItem);
      this.ceList.splice(i, 1);
      storage.setItem("myce", JSON.stringify(this.ceList));
    }
  }
};
</script>

<style>
@import url("./css/common.css");
@import url("./fonts/iconfont.css");
#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.header {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
  padding: 6px 15px;
  align-items: center;
}
.header .icon-box {
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.header .icon-box .icon {
  flex: 1;
  padding: 0 5px;
}
.search {
  width: 100%;
  height: 56px;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.search input {
  width: 100%;
  height: 100%;
  border-radius: 36px;
  background: #eee;
  border: 0;
  outline: none;
  padding: 0 10px;
}
.search .icon {
  position: absolute;
  right: 26px;
  top: 18px;
}
.main {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
.food-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.food-box dl {
  width: 33.33%;
  padding: 15px;
}
.food-box dl dt {
  width: 100%;
}
.food-box dl dt img {
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
}
.food-box dl dd p {
  text-align: center;
  color: #555;
  line-height: 1.5;
}
.food-box dl.active dt img {
  border: 1px solid red;
}
.food-box dl.active dd p {
  color: red;
}
.footer {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 15px;
  border-top: 1px solid #ccc;
  background: #fff;
}
.footer .title {
  width: 100%;
  height: 50px;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer .title span {
  color: #000;
}
.footer .title button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #f53b47;
  border: 0;
  outline: none;
  border-radius: 15px;
}
.footer .select-cont {
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.footer .select-cont p {
  position: relative;
  border: 1px solid #ccc;
  padding: 5px 20px;
  margin-right: 10px;
  margin-top: 10px;
}
.footer .select-cont p b {
  position: absolute;
  right: -8px;
  top: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  background: #ccc;
  text-align: center;
  line-height: 16px;
  font-size: 16px;
  font-weight: normal;
}
</style>
