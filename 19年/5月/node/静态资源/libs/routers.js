const router = {}

function addRouter(method,url,fn) {
  method = method.toLowerCase()
  url = url.toLowerCase()

  router[method] = router[method] || {}
  router[method][url] = fn
}

function findRouter(method,url) {
  method = method.toLowerCase()
  url = url.toLowerCase()

  if (!router[method] || !router[method][url]) {
    return null
  }else {
    return router[method][url]
  }
}

module.exports = {
  addRouter,findRouter
}


// dns.lookup('www.google.com', (err, address, family) => {
//   console.log('IP 地址: %j 地址族: IPv%s', address, family);
// });
