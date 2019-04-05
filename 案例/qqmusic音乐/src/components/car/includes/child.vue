<template>
    <div class="wrapper">
        <input type="text" v-model="msg">
        <button @click="updates" class="mt10">修改</button>
        <h3>我爱<span v-text="week"></span></h3>
    </div>
</template>
<script>
    export default {
        name:"app",
        props:["week"],
        data(){
            return{
                msg:""
            }
        },
        methods:{
            updates(){
                this.$emit("showWeek",this.msg)
            }
        }
    }
</script>