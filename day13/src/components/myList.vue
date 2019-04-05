<template>
    <div class="section">
        <div class="tit">
            <span>热销</span>
            <span>热心的鱼</span>
        </div>
        <div class="content">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in classify" :key="index" @click="fn(item.id), ind=index" :class="{'active':ind===index}">{{item.name}}</li>
                </ul>
            </div>
        <div class="right">
            <dl v-for="(item,index) in products" :key="index">
                <dt><img :src='item.url' alt=""></dt>
                <dd>
                    <h2>{{item.title}}</h2>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span><b>￥</b>{{item.price}}</span>
                        <span>
                            +
                        </span>
                    </div>
                </dd>
            </dl>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="scss">
     @import '../scss/_minix.scss';
    @import '../scss/common.scss';
    .section{
        @include flex;
        overflow-y: auto;
        .tit{
            height: pxTorem(45px);
            border-bottom:1px solid #ccc; 
            padding: 0 20px;
            @include sizing
        }
        .content{
            @include box_flex;
            .left{
                width: 45%;
                .active{
                    color: #f00;
                }
                ul{
                    li{
                        height: pxTorem(50px);
                        margin: pxTorem(10px);
                        font-size:pxTorem(45px);
                        line-height: pxTorem(50px);
                    }
                }
            }
            .right{
                dl{
                     @include box_flex;
                    dt{
                        width: 200px;
                        height: 200px;
                        background:#ff0;
                        margin: 15px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
    
</style>
