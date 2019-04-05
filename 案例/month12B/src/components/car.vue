<template>
    <div>
        <header>
            <h3>购物车</h3>
        </header>
        <div class="ban">
            <img src="/static/ban.PNG" alt="">
        </div>
        <div class="section">
            <dl class="list" v-for='(i,ind) in data' :key="ind">
                <input type="checkbox" @click='stateFn(ind)'>
                <dt><img :src="i.img" alt=""></dt>
                <dd>
                    <p>{{i.tit}}</p>
                    <div class="bot">
                        <span style="color: red;">￥{{i.price}}</span>
                        <div class="con"> 
                            <span class="red" @click='addEvent("-",ind)'>-</span>
                            <span>{{i.count}}</span>
                            <span class="red" @click='addEvent("+",ind)'>+</span>
                        </div>
                    </div>
                </dd>
            </dl>
            <div class="money">
                <input type="checkbox">全选
                <span style="color: red;">共{{allNum}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: JSON.parse(localStorage.getItem('data')) || []
            }
        },
        methods: {
            stateFn(i) {
                this.data[i].state = !this.data[i].state
            },
            addEvent(type, i) {
                if (type == '+') {
                    this.data[i].count++;
                    this.setDate()
                } else if (type == '-') {
                    this.data[i].count <= 1 ? 1 : this.data[i].count--;
                    this.setDate()
                }
            },
            setDate() {
                localStorage.setItem('data', JSON.stringify(this.data));
                this.bus.$emit('changeNum')
            },

        },
        computed: {
            allNum() {
                let allnum = 0
                this.data.forEach((item) => {
                    allnum += item.count * item.price
                })
                return allnum
            }
        },
    }
</script>
<style scope>
    .money {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
    }
    
    .money input {
        margin: 0 10px;
    }
    
    .money span {
        margin-left: 10px;
    }
    
    .red {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: solid 1px red;
        border-radius: 50%;
        line-height: 20px;
        text-align: center;
        color: red;
    }
    
    .ban {
        width: 100%;
        border-bottom: solid 1px #ccc;
    }
    
    .ban img {
        width: 100%;
    }
    
    .list {
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        align-items: center;
        border-bottom: solid 1px #ccc;
    }
    
    .list dt {
        width: 50px;
        margin: 0 20px;
    }
    
    .list dt img {
        width: 100%;
    }
    
    .list dd {
        flex: 1;
    }
</style>