function el (opt) {
  var ele = opt.ele
  var attrs = opt.attrs || {}
  var childrens = opt.childrens

  if (!ele) {
    return null
  }
  var root = document.createElement(ele)
  Object.keys(attrs).forEach( k => {
    root.setAttribute(k,attrs[k])
  })

  if (childrens instanceof Array) {
    childrens.forEach( v => {
      var child = el(v)
      root.appendChild(child)
    })
  }else {
    root.innerHTML = childrens
  }

  return root
}
