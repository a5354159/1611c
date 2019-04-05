import axios from 'axios';
export function getProductList() {
    const url = "http://localhost:8080/productList";
    return axios.get(url);
}