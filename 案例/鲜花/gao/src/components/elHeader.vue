<template>
    <header>
        <p>
			<slot></slot>
            <span>花礼网鲜花</span>
            
        </p>
        <p>
            <span>左</span>
            <span>右</span>
        </p>

    </header>
</template>
<script>
export default {

}
</script>
<style>
    header{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        background: #fff;
    }
    p:first-child span:first-child{
        padding-right: 5px;
        box-sizing: border-box;
    }
    p:last-child{
        width: 50px;
        height: 25px;
        display: flex;
        line-height: 25px;
        text-align: center;
        border:1px solid gray;
        border-radius: 15px;
    }
    p:last-child span:first-child{
        border-right: 1px solid gray;
    }
     p:last-child span{
         display: block;
         width: 25px;
     }
</style>
