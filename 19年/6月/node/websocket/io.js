const net = require('net')
const crypto = require('crypto')


//掩码操作
function unmask(buffer, mask) {
    const length = buffer.length;
    for (var i = 0; i < length; i++) {
        buffer[i] ^= mask[i & 3];
    }
}


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


let getResponseKey = (key) => {
  return crypto.createHash('sha1').update(key+`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64')
}


let server = net.createServer(function(socket) {
  socket.once('data',(buffer) => {
    let str = buffer.toString()
    let headers = parseHeader(str)
    if (headers['upgrade']!=='websocket') {
      socket.write('no upgrade')
      socket.end()
    }else if (headers['sec-websocket-version']!=13) {
      socket.write('no 13')
      socket.end()
    }else {
      let reqKey = headers['sec-websocket-key']
      let resKey = getResponseKey(reqKey)
      let resHeader = [
        'HTTP/1.1 101 Switching Protocals',
        'Upgrade: Websocket',
        'Connection: Upgrade',
        `Sec-websocket-Accept: ${resKey}`,
        '\r\n'
      ].join('\r\n')
      socket.write(resHeader)
      //返回给客户端信息，并且继续监听数据
      socket.on('data',function(buffer) {
        //获取第一个字第一位节判断是否为结束位
        let fin = (buffer[0] & 0b10000000) === 0b10000000
        //获取第一个字节的后四位
        let opcode = buffer[0] & 0b00001111
        //获取第二个字节的第一位是否为1，判断是有掩码操作
        let mask = buffer[1] & 0b100000000 === 0b100000000
        //载荷数据长度
        let payloadLength = buffer[1] & 0b01111111
        //掩码键，占4个字节
        let maskingKey = buffer.slice(2,6)
        //载荷数据，客户端发送的实际数据
        let payloadData = buffer.slice(6)

        //对数据进行掩码处理
        unmask(payloadData,maskingKey)
        console.log(payloadData.toString());
        //向客户端相应数据
        let send = Buffer.alloc(2+payloadData.length)

        send[0] = opcode | 0b10000000
        send[1] = payloadData.length
        payloadData.copy(send, 2)
        socket.write(send)
      })


    }
  })
  socket.on('error',(err) => {
    console.log(err);
  })
  socket.on('end',() => {
    console.log('end');
  })
  socket.on('close',() => {
    console.log('disconnected');
  })
})


server.listen(8000,()=> {
  console.log('running at 8000');
})
