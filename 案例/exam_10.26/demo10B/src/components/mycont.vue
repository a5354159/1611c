<template>
    <div class="content">
        <div class="left">
            <ul>
                <router-link tag="li"
                 v-for="(val,index) in tab" 
                 :key="index"
                 :to="val.url" @click.native="tabActive(index)" :class="{active:index==ind}">{{val.name}}</router-link>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: "myCont",
  data() {
    return {
      tab: [
        {
          name: "主食",
          url: "/zhu"
        },
        {
          name: "蛋奶豆制品",
          url: "/nai"
        },
        {
          name: "蔬菜类",
          url: "/shu"
        }
      ],
      ind: 0
    };
  },
  methods: {
    tabActive(i) {
      this.ind = i;
    }
  }
};
</script>
<style>
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
}
.content .left {
  width: 100px;
  height: 100%;
  overflow: auto;
  background: #eee;
  border-right: 1px solid #ccc;
}
.content .left ul {
  width: 100%;
}
.content .left ul li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.content .left ul li.active {
  font-weight: 800;
  background: #fff;
}
.content .right {
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>


