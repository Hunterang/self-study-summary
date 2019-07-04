const http = require('http')
const url = require('url')
let options = {
  hostname: '127.0.0.1',
  port: 1337,
  path: 'neteasecloudmusicapi.zhaoboy.com:80/search/hot',
  method: 'GET'
}

let server = http.createServer((req,response) => {
  let { pathname,query } = url.parse(req.url,true)
  if (pathname!='/api') {
    response.writeHead(200)
    response.write('ok')
    response.end()
  }else {
    let request = http.request(options,(res) => {
      res.setEncoding('utf8');
      let arr = []
      res.on('data',(chunk)=>{
        arr.push(chunk)
      })
      res.on('end',() => {
        console.log(Buffer.concat(arr).toString());
        response.write('12345')
        response.end()
      })
    })
    request.end()
  }
}).listen(1337, '127.0.0.1')
