const path = require('path')
const http = require('http')
const url = require('url')
const fs = require('fs')

let myVideoPath = path.resolve(__dirname, './static/a.mp4')

const app = http.createServer(server)


function server(req, res) {
    let result = url.parse(req.url, true)
    let path = result.pathname

    if(path === '/pie') {
        res.setHeader("Content-Disposition", "attachment;filename=test.mp4")
        let redstream = fs.createReadStream(myVideoPath)
        redstream.pipe(res)
        redstream.on('data', function(chunk) {
            console.log(Date.now())
            let bf = Buffer.from(chunk)
            console.log(bf.length)
        })
        redstream.on('end', function() {
            console.log('passed over')
        })
    }else {

        res.writeHead(200, {
            'content-type': 'text/plain;charset=utf-8'
        })
        res.end('helloworld')
    }
} 

app.listen(60001, () => {
    console.log('server start , port 60001')
})

//createReadStream 每次读取64k， 每秒读取44m
// 64位的内存最大2g,32位的内存1.4G
//考虑到服务器的 压力大文件使用 createReadStream
