var longestCommonPrefix = function(arr) {
  if (!arr) return ''
  if(!arr[0].length) return ''
  let str = arr[0].slice(0,1),i= 1,result = true
  while (arr[0].length) {
    let reg = new RegExp('^'+str)
    if (arr.every( item => reg.test(item))) {
      i++
      str = arr[0].slice(0,i)
    }else {
      result = false
      break
    }
  }
  return result? str: str.slice(0,str.length-1)
}

//显示我出错，故意的把，这个哪里有问题给我说
var longestCommonPrefix = function(arr) {
  if (!arr) { return '' };
  if(arr.some(item => typeof item !== 'string')) { return '' };
  if (!arr[0].length)  { return '' };
  let i = 0,hasthis = true
  while (i < arr[0].length) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[j][i] !== arr[0][i]) {
        hasthis = !hasthis
        break
      }
    }
    if(!hasthis) break
    i++
  }
  return hasthis? arr[0]: arr[0].slice(0,i);

}
longestCommonPrefix(['','acv','wwef'])
