

var http = require('http')
var path = require('path')
var url = require('url')



var app = function ( req,res ) {
  var ext = null
  var pathname = url.parse(req.url,true).pathname
  if (pathname != '/favicon') {
    ext = path.extname(pathname)
    console.log(ext);
    res.writeHead(200,{'Content-Type': require('./exc')(ext)+';charset=utf8'})


    // res.write('hello world')
    // res.end('hello world')
  // }else {
    res.end('404')
  }


}

var sever = http.createServer(app)

sever.listen(8889)

console.log('已经启动，端口8889');
