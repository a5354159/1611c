<template>
    <div class="shops">
        <span class="add" @click="handleClick()">
            +
        </span>
        <span>
            {{num}}
        </span>
        <span class="jian">
            -
        </span>
        
    </div>
</template>

<script>
export default {
    props: ['List'],
    name: 'Shoplist',
    data () {
        return {
            num: 0,
            aa : 0,
            arr: [],
            sum:0,
            cunt:0
        }
    },
    computed : {
        // console.log(this.sum)
    },
    methods: {
        handleClick () {
            let hasItem =  this.arr.filter((file, index) => {
                return file.id === this.List.id
            })
            if (hasItem.length < 1) {
                this.arr.push({...this.List, num:1});
            } else {
                this.arr.forEach((item, index) => {
                    if (item.id === this.List.id) {
                        this.arr[index].num++
                        this.num = this.arr[index].num
                    }
                })
            }
            this.arr.forEach((item, index) => {
                this.sum = item.tlt * this.num
            })
            console.log(this.sum)
            
        }
    }
}
</script>

<style>

</style>
