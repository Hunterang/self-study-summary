//找出最长不重复的字符串
let uniqstr = (str) => {
  'let maxStr = ''
  let start = 0
  let len = 1
  for (var i = 1; i < str.length; i++) {
    let result = str.slice(start,i).indexOf(str[i])
    if (result > -1) {
      if (str.slice(start,i).length > maxStr.length) {
        len = str.slice(start,i).length
        maxStr = str.slice(start,i)
      }
      start = start + result+1
    }
  }
  start=== 0 ? maxStr = str : ''
  return maxStr'
}
//最长不重复的个数正确，但是存在相同个数的，所以输出第一个最长不重复字符串



//获取开头相同的字符串

let getCommonStart = (arr) => {
  let str = arr[0].slice(0,1)
  let reg
  let istrue = true
  while (istrue) {
    reg = new RegExp('^'+str)//每次生成新的对象，外面的不会自动触发，函数已经执行过了
    for (var i = 1; i < arr.length; i++) {
      istrue = reg.test(arr[i])
    }
    if (istrue) {
      str = arr[0].slice(0,i)
    }
  }
  str = str.slice(0,-1)
  return str
}
//仍然有些缺陷，需要判断首个字符串的长度,粗略的实现过程就是这样了
