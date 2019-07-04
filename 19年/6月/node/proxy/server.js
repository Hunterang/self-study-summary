const http = require('http');
const net = require('net');
const url = require('url');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
  res.writeHead(200);
  const options = {
    port: 1337,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: 'neteasecloudmusicapi.zhaoboy.com:80/search/hot',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Length': data.length
    }
  };
  let { pathname,query } = url.parse(req.url,true)
  if (pathname=== '/api') {
    const reqs = http.request(options);
    // let data = {}
    // reqs.write(require('querystring').stringify(data))
    reqs.end();
    console.log(3);
    reqs.on('connect', (res1, socket, head) => {
      console.log('got connected!');
      // make a request over an HTTP tunnel
      socket.write('GET / HTTP/1.1\r\n' +
                   'Host: neteasecloudmusicapi.zhaoboy.com:80\r\n' +
                   'Connection: close\r\n' +
                   '\r\n');
      let arr = []
      socket.on('data', (chunk) => {
        arr.push(chunk)
      });
      socket.on('end', () => {
        res.write(Buffer.concat(arr).toString())
        res.end()
        console.log('end');
      });
    });
  }else {
    res.write('123')
    res.end()
  }
  // res.write('123')
  // res.end();
});
proxy.on('connect', (req, cltSocket, head) => {
  //发起代理先解析目标网址
  //创建tcp连接通道
  // connect to an origin server
  const srvUrl = url.parse(`http://${req.url}`);
  console.log(srvUrl);
  const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    srvSocket.write(head);
    srvSocket.pipe(cltSocket);
    cltSocket.pipe(srvSocket);
  });
  console.log('tcp连接成功');
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', () => {

  // make a request to a tunneling proxy

});
