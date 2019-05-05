var fs = require('fs')
var path = require('path')
function mine(val,cb) {
  var extname = path.extname(val)
  fs.readFile(path.resolve('router/mine.json'),(err,data) => {
    if (err) {
      console.log(err);
    }else {
      var res = data.toString()
      cb(res[extname])
    }
  })
}

module.exports = mine
