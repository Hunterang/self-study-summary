const https = require('https')
const fs = require('fs')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem')
}




https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
//浏览器访问会显示网站不安全，需要手动改掉浏览器信任的设置，并且显示一条红线
//现在多数人使用大厂免费的ssl，> let`s encrypt < 是一个用的比较多的网站，但是配置大体都是基于nginx系统的。。。
