<template>
    <div>
        <header>脉脉职言</header>
        <div class="info">
            <dl>
                <dd>
                <h4>{{data.name}}</h4>
                <p>{{data.content}}</p>
                </dd>
            </dl>
            <div class="cent">
                <img :src="data.img" alt="">
            </div>
            <div class="bot">
                <span>赞</span>
                <span>评论 <b>{{data.comment.length}}</b></span>
                <span>分享</span>
            </div>
        </div>
        <div>
            <dl class="hot" v-for='i in data.comment'>
                <dt>
                    <img :src="i.img" alt="">                    
                </dt>
                <dd>
                    <h4>{{i.name}}</h4>
                    <p>{{i.content}}</p>
                </dd>
            </dl>
        </div>
        <div class="bottom">
            评论 <input type="text" v-model='formData.content'>
            <button @click='submit'>发表</button>
        </div>
    </div>
</template>
<script>
    import List from '../data/list.js'
    export default {
        data() {
            return {
                list: [],//数据文件
                data: {},//要渲染的对象
                formData: {//要添加的对象
                    id: '',
                    name: '游客',
                    img: '/static/yk.PNG',
                    content: ''
                }
            }
        },
        created() {
            this.list = List;//赋值
            this.getData(); //过滤符合条件的数据
        },
        methods: {
            getData() {
                this.data = this.list.filter((i) => {
                   // 判断遍历的id是否与传过来的id
                    return i.id == this.$route.query.id
                })[0]
            },
            submit() {
                this.formData.id = Math.floor(Math.random() * 900 + 100);//随机id
                this.data.comment.push({...this.formData
                }) //增加数据
            }
        },
        watch: {//监听数据改变
            $route() {
                this.getData();
            }
        }
    }
</script>
<style scoped>
    header {
        text-align: center;
        line-height: 45px;
        height: 45px;
    }
    
    .content {
        padding: 10px;
        box-sizing: border-box;
        background: #eee;
    }
    
    .hot {
        display: flex;
        padding: 10px;
        box-sizing: border-box;
    }
    
    .hot img {
        width: 40px;
    }
    
    .hot dd {
        margin-left: 10px;
    }
</style>