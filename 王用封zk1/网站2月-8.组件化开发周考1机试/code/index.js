const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(clo, cl, obj) {
        this.clo = clo;
        this.cl = cl;
        let {
            oBox,
            staticBtn,
            moveBtn,
            numInput,
            allBtn
        } = obj
        this.oBox = oBox;
        this.staticBtn = staticBtn;
        this.moveBtn = moveBtn;
        this.numInput = numInput;
        this.allBtn = allBtn;
        this.init()
    }
    init() {
        this.numInput.onclick = () => {
            this.staticBtn.onclick = () => {
                this.spans = document.createElement('span')
                this.spans.innerHTML = this.numInput.value
                this.spans.style.background = this.clo;
                this.spans.style.height = `${this.numInput.value * 30}px`
                this.oBox.appendChild(this.spans)
            }
            this.moveBtn.onclick = () => {
                this.spans = document.createElement('span')
                this.spans.innerHTML = this.numInput.value
                this.spans.style.background = 'pink';
                this.spans.className = 'jump'
                this.spans.style.height = `${this.numInput.value * 30}px`
                this.oBox.appendChild(this.spans)
            }
            this.allBtn.onclick = () => {
                Array.from(this.oBox.children).forEach((item, i) => {
                    console.log(item)
                    item.style.animation = `jump 0.2s ease -in -out 0s 1 alternate both`;
                })
            }

        }

    }
}
new StaticNumBlock('red', '', {
    oBox,
    staticBtn,
    moveBtn,
    numInput,
    allBtn
})
class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(clo1, cl1, obj) {
        super(clo1, cl1, obj)
        this.clo1 = clo1;
        this.cl1 = cl1;
        console.log(clo1)
    }
    init1() {
        this.numInput.onclick = () => {

        }
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果