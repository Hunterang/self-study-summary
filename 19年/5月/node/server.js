const http = require('http')
const url = require('url')
http.createServer((req,res)=> {
  if (req.method.toLowerCase() == 'post') {
    // var urs = url.parse(req.url,true)
    // console.log(urs);
    var val = []
    req.on('data',c => {
      val.push(c)
    })
    req.on('end', err => {
      console.log(val);
    })
  }
  res.end('000')
}).listen(3001)
