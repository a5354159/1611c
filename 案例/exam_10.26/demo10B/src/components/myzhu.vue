<template>
    <div class="food-box">
        <my-dl v-for="(val,index) in list" :key="index" :val="val" :index="index"></my-dl>
    </div>
</template>
<script>
const storage = window.localStorage;
import axios from "axios";
import myDl from "./mydl";
export default {
  name: "myZhu",
  components: {
    myDl
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios.get("/api/zhu").then(res => {
      this.list = res.data;
    });
  }
};
</script>
<style>
</style>

