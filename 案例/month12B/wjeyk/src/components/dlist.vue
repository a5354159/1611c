<template>
          <div>
              <ul class="box" v-for="(v,i) in catagory" :key="i">
            <h3>{{v.Subject}}</h3>
            <li  class="lists"  v-for="(item,it) in v.Content" :key="it"
            @click="adds(i,it)
            "
            >
                    <img :src="item.Icon" alt="">
                    <p>{{item.Label}}</p>
            </li>
          </ul>
          </div>
</template>

<script>

export default {
    props:['catagory'],
    data(){
        return {
        }
    },methods: {
        adds(i,it){
            this.$bus.$emit('adds',this.catagory[i].Content[it])
        }
    },
}
</script>
<style scoped  lang="">
 .box{
        width: 100%;
         display: flex; 
         flex-wrap: wrap;
        /* flex-direction: column; */
    }
    .lists{
        width: 25%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
    }
    .lists img{
        width: 90%;
    }
    .active{
        border: 2px solid red;
    }
</style>