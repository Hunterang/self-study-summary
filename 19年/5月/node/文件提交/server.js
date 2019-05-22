const http = require('http')
const fs = require('fs')
const bufferSplit = require('./node_modules/split').uilt

const server = http.createServer((req,res) => {
  let boundry = '--'+req.headers['content-type'].split('=')[1];
  let arr = []
  req.on('data',  buffer => {
    arr.push(buffer)
  })
  req.on('end', () => {
    let buf = Buffer.concat(arr)
    let res = bufferSplit(buf,boundry)

    res.shift()
    res.pop()

    res.forEach( v => {
      v = v.slice(2,v.length-2)
      let [pname,value] = bufferSplit(v,'\r\n\r\n')
          pname = pname.toString()
      if (pname.indexOf('\r\n') > 0) {
        let res1 = pname.split('\r\n')[0].split('; ')
        let name = res1[1].split('=')[1]
        let filename = res1[2].split('=')[1]

        name = name.substring(1,name.length-1)
        filename = filename.substring(1,filename.length-1)
        console.log(name,filename);
        fs.writeFile(`static/${filename}`,value,err => {
          if (err) {
            console.log(err);
          }else {
            console.log('上传成功');
          }
        })
      }else {
        let name = pname.split('=')[1]
        console.log(name);

      }
    })
  })
})

server.listen(8001)
