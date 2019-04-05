<template>
    <dl class="pro-item">
        <dt>
            <img :src="defaultPic" alt="">
        </dt>
        <dd class="item-c">
            <h2>{{shopName}}</h2>
            <div class="prize-wrap">
                <prize :shopPower="shopPower"></prize>
                <span>￥{{avgPrice}}/人</span>
            </div>
            <span>{{mainCategoryName}}</span>
        </dd>
        <dd class="item-r" v-if="show">
            <span @click="del"><i class="icon iconfont icon-shanchu"></i></span>
            <span>{{distanceStr}}</span>
        </dd>
        <dd v-else class="status" @click="add" ref="add">
            {{status?'-':'+'}}
        </dd>
    </dl>
</template>

<script>
import prize from './prize'
export default {
    props:{
        show:{
            type:Boolean,
            default:true
        },
        avgPrice:Number,
        defaultPic:String,
        distanceStr:String,
        mainCategoryName:String,
        shopId:Number,
        shopName:String,
        shopPower:Number,
        status:Boolean
    },
    components:{
        prize
    },
    methods:{
        add(){
            let text = this.$refs.add.innerText;
            text = text ==='+'?'-':'+';
            this.$refs.add.innerText = text;
            this.$emit('choose',this.shopId,text)
        },
        del(){
            this.$emit('del',this.shopId);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pro-item{
        width:100%;
        padding:15px;
        display: flex;
        background: #fff;
        border-bottom:1px solid gray;
        position: relative;
        dt{
            width:60px;
            height:60px;
            overflow: hidden;
            border:1px solid gray;
            margin-right:10px;
            img{
                width:100%;
                height: 100%;
            }
        }

        .item-c{
            flex:1;
            display: flex;
            flex-direction:column;
            justify-content:space-between;
            font-size:12px;
            h2{
                font-size:16px;
                font-weight: bold;
            }
        }
        .item-r{
            width:40px;
            color:gray;
            font-size:14px;
            display: flex;
            flex-direction:column;
            justify-content:space-between;
            text-align: right;
            
        }
        .status{
            width:30px;
            height:30px;
            background: orange;
            border-radius: 50%;
            position: absolute;
            right:15px;
            top:50%;
            transform: translateY(-50%);
            color:#fff;
            text-align: center;
            line-height: 30px;
        }
    }
    .prize-wrap{
        display: flex;
    }
   
</style>
