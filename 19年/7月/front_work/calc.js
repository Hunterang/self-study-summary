function format(arr) {
  let result = []
  let newArr = [...new Set(arr)].sort((a,b) => a-b)
  let num = Math.floor(newArr[0]/10)
  let children = []
  for (var i = 0; i < newArr.length; i++) {
    if (Math.floor(newArr[i]/10) === num) {
      children.push(newArr[i])
    }else {
      num = Math.floor(newArr[i]/10)
      result.push(children)
      children = []
      children.push(newArr[i])
    }
  }
  result.push(children)
  return result
}
//字符串大写变小写，小写变大写
function swichCase(str) {
  return str.replace(/\w/g, $1 => /[a-z]/.test($1)? $1.toUpperCase(): $1.toLowerCase() )
}
