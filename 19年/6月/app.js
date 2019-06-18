const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const HTTP_PORT = 1234

let server = http.createServer((req,res) => {
  let {pathname,query} = url.parse(req.url,true)
  let extname = path.extname(pathname)
  res.writeHead(404)
  res.write('Not Fond')
  res.end()
})

server.listen(HTTP_PORT,() => {
  console.log(`listening at ${HTTP_PORT}`);
})
