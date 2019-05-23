function jsonUrlParam(url) {
  let o = Object.create(null)
  url.replace(/([^#?&]+)=([^&]+)/g,(_,v,k) => o[v] = k)
  return o
}
