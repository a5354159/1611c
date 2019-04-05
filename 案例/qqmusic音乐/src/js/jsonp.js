import originJsonp from "jsonp";
const formateParameter = function(data) {
    let str = "";
    for (let key in data) {
        str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
    }
    return str;
}
export default function jsonp(url, data, opt) {
    return new Promise((resolve, reject) => {
        url += url.includes("?") ? formateParameter(data) : "?" + formateParameter(data);
        originJsonp(url, opt, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
}