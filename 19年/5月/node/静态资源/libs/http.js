const http = require('http')
const url = require('url')
const querystring = require('querystring')
const zlib = require('zlib')
const fs = require('fs')
const mult = require('multiparty')
const { HTTP_PORT,HTTP_ROOT,HTTP_UPLOAD } = require('../config')
const { findRouter } = require('./routers.js')
http.createServer((req,res) => {
//解析路由数据
let { pathname,query } = url.parse(req.url,true)
if (req.method == 'POST') {
  if (req.headers['content-type'].startWith('application/x-www-form-urlencoded')) {
    let arr = []
    req.on('data',bf => {
      arr.push(bf)
    })
    req.on('end',() => {
      let post = querystring.parse(Buffer.concat(arr).toString())


      handle(req.method,pathname,query,post,{})
    })
  }else {
    //文件操作
    let post = {}
    let files = {}
    let form = new mult.Form({
      uploadDir: HTTP_UPLOAD
    })
  }
  form.parse(req)//先暂时这样
  form.on('flied',(name,value) => {
    post[name] =value
  })
  form.on('file',(name,value) => {
    files[name] = value
  })
  form.on('close',() => {
    handle(req.method,pathname,query,post,files)
  })
}else {
  handle(req.method,pathname,query,{},{})
}
function handle(method,url,get,post,file) {
  let fn = findRouter(method,url)
  if (!fn) {
    let filepath = HTTP_ROOT + url
    fs.stat(filepath,(err,stat) => {
      if (err) {
        res.writeHead(404)
        res.write('Not Found')
        res.end()
      }else {
        let rs = createReadStream(filepath)
        let gz = zlib.createGzip()
        rs.pipe(gz).pipe(res)
      }
    })
  }else {
    try {
      fn(res,get,post,file)
    } catch (e) {
      console.log(e);
      res.writeHead(500)
      res.write('interface error')
      res.end()
    }
  }
}

}).listen(HTTP_PORT)
console.log(`server started at ${HTTP_PORT}`)
