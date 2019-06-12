const http = require('http')
const url = require('url')
const pox = require('./request.js')
const querystring = require('querystring')

let options = {//代理配置，google在本地服务器无法代理，需要国外的vps》
  headers: {

  }
}


let server = http.createServer((req,res)=> {
  let { pathname,query } = url.parse(req.url,true)
  let proxyData = querystring.stringify(query)
  if (pathname === '/google') {

    let proxyReq = http.request(options,(proxyRes) => {
      proxyRes.setEncoding('utf8')
      let data = []
      proxyRes.on('data',chunk => {
        arr.push(chunk)
      })
      proxyRes.on('end',() => {
        let buffer = Buffer.concat(data)
        res.write(data)
        res.end()
      })
    })
    proxyReq.write(proxyData)
    proxyReq.end()
  }

})
