<template>
    <header class="box">
       <slot></slot>
    </header>
</template>
<style>
    .box{
        width: 100%;
        height: 44px;
        box-sizing: border-box;
        display: flex;
        background: #EFEFF0;
    }
    .box>ul{
        width: 100%;
        height: 100%;
        line-height: 100%;
       
        display: flex;
        padding: 0 15px;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .box>ul>li{
        font-size:18px; 
    }
    .box>ul>li.router-link-active{
        box-sizing: border-box;
        height: 44px;
        line-height: 44px;
        color: coral;
        border-bottom:2px solid #ccc; 
    }
    .box>span{
     width: 50px;
     display: inline-block;
     line-height: 44px;
     margin: 0 15px;
    }
</style>
