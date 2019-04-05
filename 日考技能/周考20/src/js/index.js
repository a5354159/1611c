import 'scss';
import Vue from 'vue';
new Vue({
    el: '#main',
    data: {
        list: [{
            tit: '朋友圈'
        }, {
            tit: '扫一扫'
        }, {
            tit: '搜一搜'
        }, {
            tit: '小程序'
        }],
        footer: [{
            img: './img/footer.jpg',
            tit: '微信'
        }, {
            img: '../img/footer2.jpg',
            tit: "通讯录"
        }, {
            img: './img/footer3.jpg',
            tit: '发现'
        }, {
            img: './img/footer4.jpg',
            tit: '我'
        }]
    }
})