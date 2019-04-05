<template>
    <div>
        <dl>
             <dt>
                <img :src=img alt="">
            </dt>
            <dd>
                <h2>{{title}}</h2>
                <p>{{price}}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:['title','price','img']
}
</script>
<style lang="scss" scoped>
div{
    width: 100%;
    height: 100%;
}
 dl{
    
     width: 100%;
     height: 200px;
    dt{
        text-align: center;
        img{
            width: pxTorem(100px);
            height: pxTorem(100px);
            border-radius: 50%;
        }
    }
}
</style>
