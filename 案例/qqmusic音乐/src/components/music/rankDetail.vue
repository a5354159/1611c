<template>
    <div >
            this is rankDetail
            {{url}}
           <img :src="url.replace(/w\.h/,'216.0')">
            <a onClick="javascript:history.back()">返回</a>
    </div>
</template>
<script>
    export default {
        name:"app",
        data(){
            return {
                data:'',
                url:"http://p1.meituan.net/w.h/movie/740bd990e4af29d537ce324ec2cd08d6300433.jpg"
            }
        },
        watch:{
            "$route":"getdata"
        },
        mounted(){
            this.getdata()
        },
        methods:{
            getdata(){
                this.data=this.$route.query
                console.log(this.$route.query)
            }
        }
    }
</script>
<style lang="" scoped>
    .content{
        height:100%;
        display:flex;
        flex-direction: column;
    }
    .banner{
        height:100%;
        display:flex;
        flex-direction: column;

    }
</style>