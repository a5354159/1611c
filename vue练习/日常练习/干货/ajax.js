function ajax(url) {
    return new Promise((res, rej) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status === 200 && xhr.status >= 300 || xhr.status > 304) {
                res(JSON.parse(xhr.responseText))
            } else {
                rej(new Error('没找到数据'))
            }

        }
    })
}