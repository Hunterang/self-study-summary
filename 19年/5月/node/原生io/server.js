const net = require('net')
const crypto = require('crypto')

function parseHeader(str) {
  let arr = str.split('\r\n').filter(v => v)
  arr.shift()
  let headers = {}
  arr.forEach(v => {
    let [name,value] = v.split(': ');
    name = name.replace(/^\s+|\s+$/,'').toLowerCase();
    value = value.replace(/^\s+|\s+$/,'');
    headers[name] = value
  })
  return headers
}

//虽然实现了socket链接，但是数据传输乱码

var server = net.createServer(function(socket) {
  socket.once('data', buffer => {
    let str = buffer.toString()
    let headers = parseHeader(str)
    // console.log(headers);
    if (headers['upgrade']!='websocket') {
      console.log('no upgrade');
      socket.end()
    }else if (headers['sec-websocket-version'] != 13) {
      console.log('no 13');
      socket.end()
    }else {
      let key = headers['sec-websocket-key'];
      let uuid = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
      let hash = crypto.createHash('sha1')

      hash.update(key+uuid)
      let resKey = hash.digest('base64');
      socket.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection:Upgrade\r\nSec-websocket-Accept:${resKey}\r\n\r\n`)
    }
  })
  socket.on('data',(buffer) => {

  })
  socket.on('end', () => {
    console.log('disconnected');
  })
})

server.listen(8007)
