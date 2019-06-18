const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const zlib = require('zlib')
let server = http.createServer((req,res) => {
  let { pathname,query } = url.parse(req.url,true)
  if (req.method === 'GET') {
    if (pathname === '/') {
      res.writeHead(200)
      res.write('welcome')
      res.end()
      return
    }
    let router =  path.resolve(__dirname,`./static`)+pathname
    console.log(router);
    fs.stat(router,(err,stats) => {
      if (err) {
        res.writeHead(404)
        console.log(err);
        res.write('Not Found')
        res.end()
      }else {
        let rs = fs.createReadStream(router)
        res.setHeader('content-encoding','gzip')
        let gz = zlib.createGzip()
        rs.on('error', _=> {
          console.log(_);
        })
        rs.pipe(gz).pipe(res)
      }
    })

  }else {
    res.writeHead(404)
    res.write('Not Found')
    res.end()
  }
})

server.listen(3001,()=> {
  console.log(`listing at port 3000`);
})
