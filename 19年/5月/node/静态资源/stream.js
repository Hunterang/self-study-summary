const fs = require('fs')
const zlib =  require('zlib')

//不用gz属于纯粹的复制粘贴
let rs = fs.createReadStream('www/1.txt')
let gz = zlib.createGzip()//创建压缩文件
// let ws = fs.createWriteStream('www/2.txt')
let ws = fs.createWriteStream('www/2.txt.gz')

rs.pipe(gz).pipe(ws)
// rs.pipe(ws)

rs.on('error',err => {
  console.log(err);
})

ws.on('finish',() => {
  console.log('finish');
})
