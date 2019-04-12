

var http = require('http')

var app = function ( req,res ) {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
  res.write('hello world')
  res.end()
}

var sever = http.createServer(app)

sever.listen(8889)

console.log('已经启动，端口8889');
