<template>
    <dl class="flower-item">
        <dt>
            <img :src="obj.Image" alt="">
        </dt>
        <dd>
            <h2>{{obj.Name}}</h2>
            <span>价格：{{obj.Price}}</span>
            <span>销量：{{obj.Sales}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['obj']
}
</script>
<style  lang="scss">
    .flower-item{
        margin:15px;
        display: flex;
        dt{
            width:90px;
            height:100px;
            overflow: hidden;
            margin-right:10px;
            flex-shrink: 0;
            img{
                width:100%;
                height: 100%;
            }
        }
        dd{
            h2{
                font-size:16px;
            }
            font-size:14px;
        }
    }
</style>

