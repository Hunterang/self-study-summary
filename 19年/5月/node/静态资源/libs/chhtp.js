const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
const zlib = require('zlib')
const mult = require('multiparty')//处理上传文件使用
const { HTTP_PORT,HTTP_ROOT,HTTP_UPLOAD } = require('../config')
let { findRouter } = require('./routers')
let server = http.createServer((req,res) => {
  let { pathname,query } =url.parse(req.url, true)
  if (req.method.toLowerCase() == 'post') {
    if (req.headers['content-type'].startWith('application/x-www-form-urlencoded')) {
      //普通post
      let arr = []
      req.on('data', bf =>{
        arr.push(bf)
      })
      req.on('end', () => {
        let post = querystring.parse(Buffer.concat(arr).toString())
          fn(req.method,pathname,{},post,{})
      })
    }else {
      //文件post
      let form = new mult.Form({
        uploadDir:HTTP_UPLOAD
      })
      form.parse(req)
      let post = {}
      let files = {}

      form.on('field',(name,value) => {
         post[name] = value
      })
      form.on('file',(name,file) => {
         flies[name] = file
      })
      form.on('error',(err) => {
        console.log(err);
      })
      form.on('close',() => {
        fn(req.method,pathname,{},post,files)
      })
    }
  }else {
    //get方法
    handle(req.method,pathname,query,{},{})
  }
  async function handle(method,url,get,post,files) {

    let fn = findRouter(method,url)
    if (!fn) {

      let filename = HTTP_ROOT+url
      fs.stat(filename,(err,stat) => {
        if (err) {
          res.writeHead(404)
          res.write('Not  Found');
          res.end()
        }else {
          let rs = fs.createReadStream(filename)
          let gz = zlib.createGzip()
          res.setHeader('content-encoding','gzip')
          rs.on('error',()=> {
            console.log(err);
          })
          rs.pipe(gz).pipe(res)

        }
      })

    }else {
      try {
        // console.log(fn);
        await fn(res,get,post,files)
      } catch (e) {
        console.log(e);
        res.writeHead(500)
        res.write('server error')
        res.end()
      }
    }
  }
})

server.listen(HTTP_PORT)
console.log(`server listen ${HTTP_PORT}`)
