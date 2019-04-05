import axios from 'axios';
import Jsonp from "common/jsonp";
export function getCarouselList() {
    const url = "http://localhost:8080/carouselList";
    return axios.get(url)
}
export function getSongsList() {

    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
    const data = {
        tpl: 3,
        page: "detail",
        date: "2018-09-12",
        topid: 4,
        type: "top",
        song_begin: 0,
        song_num: 30,
        g_tk: 1337490791,
        loginUin: 1771510445,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    };
    const opt = {
        param: "jsonpCallback",
        prefix: "_js"
    };
    return Jsonp(url, data, opt);
}