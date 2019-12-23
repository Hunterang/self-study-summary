export function throtolle (timeout) {
  let timer = null
  return function (cb) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      cb()
    }, timeout)
  }
}

export function toHeader () {
  let start = window.scrollY
  function run () {
    let rq = window.requestAnimationFrame(run)
    let step = -window.scrollY / 10
    start = start + step
    window.scrollTo(0, start)
    if (Math.abs(step) * 10 < 1) {
      window.scrollTo(0, 0)
      window.cancelAnimationFrame(rq)
    }
  }
  run()
}
const htmlCollection = ['div', 'p', 'span', 'ul', 'li']
function createNode (el, attr, child) {
  let tag
  if (typeof el === 'string') {
    if (htmlCollection.includes(el)) {
      tag = document.createElement(el)
    } else {
      return document.createTextNode(el)
    }
  } else if (typeof el === 'function') {
    // function 不解析
  } else {
    return document.createTextNode(JSON.stringify(el))
  }

  Object.keys(attr).forEach(v => {
    if (v === 'className') {
      tag.className += ' ' + attr.className
    } else if (v === 'style') {
      for (let s in v) {
        tag.style[s] = v[s]
      }
    } else if (v === 'on') {
      for (let o in v) {
        tag.addEventListener(o, v[o], false)
      }
    }
  })
  if (Array.isArray(child)) {
    if (child.length) {
      child.forEach(ch => tag.appendChild(ch))
    }
  } else if (child) {
    let childTag = document.createTextNode(child)
    tag.appendChild(childTag)
  }
  return tag
}
// 一个提示框，点击时候添加即可
export function $message ({ title, tip, timeout = 3000 }) {
  let tipTag = createNode('div', { className: 'message-wrap' },
    [
      createNode('p', { className: 'title' }, title),
      createNode('p', { className: 'tip' }, tip)
    ]
  )

  document.body.appendChild(tipTag)
  setTimeout(() => {
    document.body.removeChild(tipTag)
  }, timeout)
}

export function formate (time, fmt = 'Ty/Tm/Td Th:Tf:Ts') {
  if (/\s/.test(time)) return time

  let data = new Date(time)
  let timer = {
    Ty: data.getFullYear(),
    Tm: data.getMonth() + 1,
    Td: data.getDate(),
    Th: data.getHours(),
    Tf: data.getMinutes(),
    Ts: data.getSeconds()
  }
  for (let key in timer) {
    if (new RegExp(`(${key})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, timer[key])
    }
  }
  return fmt
}
export function longestPalindrome (s) {
  let len = s.length
  if (len < 2) return s
  let maxStr = s[0]
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      var currentStr = s.slice(i, j)
      var abCurrentStr = currentStr.split('').reverse().join('')
      if (currentStr === abCurrentStr && currentStr.length > maxStr.length) {
        maxStr = currentStr
      }
    }
  }
  return maxStr
}


