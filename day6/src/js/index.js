class Balnner {
    constructor(obj) {
        this.el = obj.el;
        this.data = obj.data;
    }
}

new Balnner({
    el: '#wrap',
    data: {

        isauto: true,
        timer: 3000,
        sun: 3000,
        img: ['img1.jpg', 'img2.jpg', 'img3.jpg']
    }
})