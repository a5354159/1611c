<template>
    <div class="scroll-wrap" :ref="scrollerWrap">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name :"app",
    props:{
        data:{
            type:Array
        },
        scrollbar:{
            type:Boolean,
            default:false
        },
        scrollerWrap:{
            type:String,
            required:true
        }
    },
    watch:{
        data(obj,val){
            this.refresh()
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.scroller=new BScroll(this.$refs[this.scrollerWrap],{
                click:document.body.width>768?false:true,
                scrollbar:this.scrollbar
            })
        },
        refresh(){
            this.scroller&&this.scroller.refresh()
        }
    }
}
</script>
<style>
.scroll-wrap{
    position: relative;
    flex: 1;
    height:100%;
}
</style>


