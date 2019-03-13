function check(obj,callback) {
    Array.from(obj.childNode).forEach((val,index) => {
      callback(val)
    })
}
