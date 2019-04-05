let fs = require('fs');
let complayte = (url) => {
    return new Promise((res, rej) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) {
                rej(err)
            }
            res(data)
        })
    })
}
let concat = async function() {
    let html = await complayte('./lianxi.html');
    let css = await complayte('./style.css');
    return html.replace(/{{style}}/, `<style>${css}</style>`)
}
concat().then((ress) => {
    console.log(ress)
})