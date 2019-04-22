

const url = require('url')

function Express = function () {
  let self = this
  self._get = {}
  self._post = {}
  var app = function (res,req) {

  }
  app.get = function (str,cb) {
    if (!str.endsWith('/')) {
      
    }


    self._get[str].push(cb)
  }
  app.post = function (str,cb) {

    self._post[str].push(cb)
  }
}

function checkres (res) {

}
