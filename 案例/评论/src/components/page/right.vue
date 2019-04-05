<template>
    <div class="center">
        <template v-for='i in data'>
            //点击列表跳到详情页，并用query传递id
            <router-link tag='div' :to="{path:'/detail',query:{id:i.id}}" class="info">      
                <dl>
                    <dd>
                    <h4>{{i.name}}</h4>
                    <p>{{i.content}}</p>
                    </dd>
                </dl>
                <div class="cent">
                    <img :src="i.img" alt="">
                </div>
                <div class="bot">
                    <span>赞</span>
                    <span>评论 <b>{{i.comment.length}}</b></span>
                    <span>分享</span>
                </div>
            </router-link>
        </template>
</div>
</template>
<script>
    import Data from '../../data/list.js'
    console.log(Data)
    export default {
        data() {
            return {
                data: Data
            }
        }
    }
</script>
<style>

</style>