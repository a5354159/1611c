<template>
    <div class="car">
        <div class="top">
            <h3>账户登录</h3> 
        </div>
        <div class="logo">
            <img src="/static/dl.PNG" alt="">
        </div>
        <div class="login">
            <input type="text" placeholder="请输入手机号"><br>
            <input type="text" placeholder="请输入手机验证"><br>
            <button>确定</button>
        </div>
        <ul class="keyword">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li class="gray"></li>
            <li>0</li>
            <li class="gray">X</li>
        </ul>
    </div>
</template>
<style>
    .gray {
        background: #eee
    }
    
    .car {
        width: 100%;
        height: 100%;
    }
    
    .login {
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
    }
    
    button {
        width: 300px;
        height: 45px;
        border: 0;
        background: rgba(0, 0, 255, .5);
    }
    
    input {
        margin-bottom: 10px;
        width: 300px;
        height: 45px;
        outline: none;
        border: 0;
        border-bottom: solid 1px #ccc;
    }
    
    .top {
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    
    .logo {
        width: 100%;
        height: 200px;
        text-align: center;
    }
    
    .logo img {
        width: 215px;
        height: 165px;
    }
    
    .keyword {
        width: 100%;
        display: flex;
        height: 185px;
        position: fixed;
        bottom: 0;
        left: 0;
        flex-wrap: wrap;
        border-top: solid 1px #ccc;
    }
    
    .keyword li {
        width: 33%;
        line-height: 45px;
        text-align: center;
        border-bottom: solid 1px #ccc;
        border-right: solid 1px #ccc;
    }
</style>