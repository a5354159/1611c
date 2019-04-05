<template>
    <div>
        <div class="mark">
            <div class="box">
                <div class="ban"><img src="/static/ban.PNG" alt=""></div>
                <p>规格  <b>{{itemData.size}}</b></p>
                <p>{{itemData.content}}</p>
                <div class="con">
                    <b>￥{{itemData.price}}</b>
                    <div class="right">
                        <span class="btn" @click='addEvent("-")'>-</span>
                        <span>{{itemData.count}}</span>
                        <span class="btn" @click='addEvent("+")'>+</span>
                    </div>
                </div>
                <p>{{itemData.name}}</p>
                <div class="sub">
                    <router-link tag='button' to='/car'>充2赠1,充5赠5</router-link><router-link tag='button' to='/car'>加入购物车</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['itemData'],
        created() {
            console.log(this.itemData)
        },
        methods: {
            addEvent(type) {
                if (type == '+') {
                    this.itemData.count++
                } else if (type == '-') {
                    this.itemData.count <= 1 ? 1 : this.itemData.count--;
                }
            }
        },
    }
</script>
<style>
    .box p {
        padding: 10px;
        box-sizing: border-box;
    }
    
    .sub {
        padding: 0 10px;
        box-sizing: border-box;
        margin-top: 20px;
    }
    
    .sub button {
        width: 120px;
        height: 40px;
        border: 0;
        margin-right: 10px;
    }
    
    .con,
    .right {
        display: flex;
    }
    
    .con {
        margin: 10px 0;
        padding: 0 10px;
        box-sizing: border-box;
        width: 100%;
        justify-content: space-between;
    }
    
    .right {
        width: 80px;
        justify-content: space-between;
    }
    
    .btn {
        width: 20px;
        height: 20px;
        display: block;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        background: slategray;
        color: #fff;
    }
    
    .mark {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        background: rgba(0, 0, 0, .5)
    }
    
    .box {
        width: 300px;
        height: 500px;
        margin-left: 35px;
        background: #fff;
        margin-top: 100px;
        border-radius: 20px;
        overflow: hidden;
    }
    
    .ban {
        width: 100%;
        height: 150px;
    }
    
    .ban img {
        width: 100%;
    }
</style>