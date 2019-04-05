<<template>
    <div class="wrapper">
        <header class="header text-center">购物车</header>
        <section class="main">
            <div class="checkall">
                <input type="checkbox" id="checkall" v-model="checkall" @change="checkAllItem">
                <label for="checkall" class="text-middle">全选</label>
            </div>
            <list :productList="productList" @update="onupdate"></list>
        </section>
        <footer class="footer">
            <div class="sum">总量:<span>{{num}}</span></div>
            <div class="price">总价:<span>{{pnum}}</span></div>
        </footer>
    </div>
</template>
<script>
    import list from "./includes/list.vue"
    import {getProductList} from "common/shopper"
    export default {
        name:"app",
        data(){
            return {
               productList:[],
               num:0,
               pnum:0,
               checkall:false
            }
        },
        mounted() {
            this._getProductList()
        },
        methods:{
            checkAllItem(){
                console.log(this.checkall)
                this.productList.forEach(itm=>{
                    itm.ischeck=this.checkall
                })
                this.caculate()
            },
            _getProductList(){
                getProductList().then(res=>{
                    this.productList=res.data;
                    this.caculate()
                })
            },
            onupdate(){
                console.log(111)
                const temp=[];
                this.productList.forEach(itm=>{
                    if(itm.ischeck){
                        temp.push(itm)
                    }
                })
                if(temp.length==this.productList.length){
                    this.checkall=true
                }else{
                    this.checkall=false
                }
                this.caculate()
            },
            caculate(){
                let tot=0;
                let sum=0;
                this.productList.forEach(itm=>{
                    if(itm.ischeck){
                        tot+=itm.count;
                        sum+=itm.count*itm.price;
                    }
                })
                this.num=tot;
                this.pnum=sum
            }
        },
        components:{
            list
        }
    }
</script>
<style lang="" scoped>
    .wrapper{
    }
    .checkall{
        position: relative;
        z-index: 99;
        background: #fff;
    }
    .header{
        background:skyblue;
        padding:15px 0;
        font-size:18px;
    }
    .wrapper .main{
        flex:1;
        width:100%;
        height:100%;
        padding:0 20px;
        overflow: hidden;
    }
    .footer{
        background:skyblue;
        padding:15px 20px;
        font-size:14px;
        display:flex;
        justify-content:space-between;
        color:#fff;
    }
</style>