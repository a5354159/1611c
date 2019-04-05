<template>
    <div :class="['list',{'border': items.Layout == 'border'}]">
        <h3>{{items.Subject}}</h3>
        <div>
            <dl v-for="(item,index) in items.Content" :key="index">
                <dt>
                    <img :src="item.Icon" alt="">
                </dt>
                <dd>{{item.Label}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        items:Object
    },
    data(){
        return{

        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
    @import '../scss/common.scss';
    @import '../scss/_mixin.scss';
    .list{
        width: 100%;
        padding: 0 pxTorem(10px);
        @include sizing;
        h3{
            height: pxTorem(44px);
            width: 100%;
            line-height: pxTorem(44px);
            font-size: pxTorem(16px);
        }
        >div{
            width: 100%;
            @include box_flex;
            @include flexWrap;
            dl{
                width: 24%;
                dt{
                    height: pxTorem(30px);
                    width: pxTorem(30px);
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
                dd{
                    font-size: pxTorem(16px);
                }
            }
        }
        &.border{
            dl{
                @include box_flex;
                border: 1px solid #ccc;
            }
        }
    }
</style>

