<template>
    <div>
        <router-view></router-view>      
        <footer class="footer">
            <router-link tag='dl' to='/'>
                <dt><img src="/static/sy.PNG" alt=""></dt>
                <dd>首页</dd>
            </router-link>
            <dl>
                <dt><img src="/static/fl.PNG" alt=""></dt>
                <dd>分类</dd>
            </dl>
            <router-link tag='dl' to='/car'>
                <dt><img src="/static/car.PNG" alt=""></dt>
                <dd>购物车 
                <b class="hong" v-if='Count!=0' style="color: red">{{Count}}</b></dd>
            </router-link>
            <dl>
                <dt><img src="/static/wd.PNG" alt=""></dt>
                <dd>我的</dd>
            </dl>
        </footer> 
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                newArr: [],
                Count: 0
            }
        },
        created() {
            this.getData()
            this.getCount()
            this.bus.$on('addcar', data => {
                let obj = this.newArr.find(item => item.id == data.id);
                if (obj) {
                    ++obj.count
                } else {
                    data.count = 1;
                    this.newArr.push(data)
                }
                localStorage.setItem('data', JSON.stringify(this.newArr))
                this.getCount()
            })
            this.bus.$on('changeNum', () => {
                this.getData()
                this.getCount()
            })

        },
        methods: {
            getData() {
                this.newArr = JSON.parse(localStorage.getItem('data')) || []
            },
            getCount() {
                this.Count = this.newArr.reduce((a, b) => a + b.count, 0);
            }
        },
    };
</script>
<style>
    * {
        margin: 0;
        padding: 0
    }
</style>