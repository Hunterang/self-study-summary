const http = require('http')
const io = require('socket.io')

let server = http.createServer((req,res) => {})

let wsServer = io.listen(server)
wsServer.on('connection',sock=> {
  sock.emit('requst','ok')
  sock.on('data',function(data) {
      sock.emit('message','nihao')
  })
})

server.listen(3000)
