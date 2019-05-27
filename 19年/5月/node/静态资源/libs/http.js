const http = require('http')
const url = require('url')
const querystring = require('querystring')
const zlib = require('zlib')
const fs = require('fs')
const mult = require('multiparty')
const { HTTP_PORT,HTTP_ROOT,HTTP_UPLOAD } = require('../config')

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


      handle()
    })
  }else {
    //文件操作
    let form = new Form({
      uploadDir: HTTP_UPLOAD
    })
  }
  form.parse()//先暂时这样
}else {
  handle(req.method,pathname,)
}


}).listen(HTTP_PORT)
console.log(`server started at ${HTTP_PORT}`)
