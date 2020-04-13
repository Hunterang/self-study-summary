/*
*2020/3/6
*/
const link = 'https://leetcode-cn.com/problems/valid-parentheses/'
var isValid =  function(s) {
  let reg = /\(\)|\{\}|\[\]/

  // if(!reg.test(s)){
  //   return s==='' ? true: false
  // }
  while (reg.test(s)) {
    s = s.replace(reg, '')
  }
  return s === '' ? true : false
}
