var http = require('http')
var url = require('url')
var path = require('path')
var fs = require('fs')
var mine = require('./router/mine.js')
var server = http.createServer( (req,res) => {
  var pathname = url.parse(req.url).pathname
  if (pathname != '.ico') {
    if (pathname == '/') {
      pathname = '/index.js'
    }
    fs.readFile('static'+pathname,(err,trunk) => {
      if (err) {
        console.log(err);
      }else {
        mine(pathname,(val) => {
          res.writeHead(200,{'Content-Type': val+';charset=utf-8;'})
          res.end(trunk.toString())
        })
      }
    })
  }

}).listen(3001)
