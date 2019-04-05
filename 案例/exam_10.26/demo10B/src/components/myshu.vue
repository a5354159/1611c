<template>
    <div class="food-box">
        <my-dl v-for="(val,index) in list" :key="index" :val="val"></my-dl>
    </div>
</template>
<script>
import axios from "axios";
import myDl from "./mydl";
export default {
  name: "myShu",
  components: {
    myDl
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios.get("/api/shu").then(res => {
      this.list = res.data;
    });
  }
};
</script>

