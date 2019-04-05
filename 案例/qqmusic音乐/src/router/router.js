import House from "view/house/index.vue";
import Music from "view/music/index.vue";
import Car from "view/car/index.vue";
import Shop from "view/shop/index.vue";
import Rank from "view/music/rank.vue";
import TopList from "view/music/topList.vue";
import Search from "view/music/search.vue";
import rankDetail from "view/music/rankDetail.vue"
const routes = [{
    path: "/",
    redirect: "/music"
}, {
    path: "/house",
    name: 'house',
    component: House
}, {
    path: "/music",
    name: 'music',
    component: Music,
    children: [{
        path: "",
        redirect: "/music/rank"
    },{
        path: "/music/rankDetail",
        name:"rankDetail",
        component: rankDetail
    } ,
    {
        path: "/music/rank",
        component: Rank
    }, {
        path: "/music/topList",
        component: TopList
    }, {
        path: "/music/search",
        component: Search
    }]
}, {
    path: "/car",
    name: 'car',
    component: Car
}, {
    path: "/shop",
    name: 'shop',
    component: Shop
}]
export default routes