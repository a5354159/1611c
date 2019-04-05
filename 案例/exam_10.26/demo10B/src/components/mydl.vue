<template>
    <dl @click="change(val.name)" :class="{active:show}">
        <dt>
            <img :src="val.imgUrl" alt="">
        </dt>
        <dd>
            <p>{{val.name}}</p>
        </dd>
    </dl>
</template>
<script>
const storage = window.localStorage;
export default {
  name: "myDl",
  props: ["val", "index"],
  data() {
    return {
      show: false,
      list: []
    };
  },
  methods: {
    change(name) {
      this.bus.$emit("showCe", this.val);
      this.list = JSON.parse(storage.getItem("myce")) || [];
      let flag = this.list.some(item => {
        return item.name == name;
      });
      if (flag) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    this.list = JSON.parse(storage.getItem("myce")) || [];
    this.bus.$on("removeActive", arr => {
      let removeList = this.list.filter(item => {
        return item.name !== arr.name;
      });
    });
    let flag = this.list.some(item => {
      return item.name == this.val.name;
    });
    if (flag) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
};
</script>

