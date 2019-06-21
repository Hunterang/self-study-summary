//判断回文
var isPalindrome = function(x) {
  if(x < 0) return false
  let str = ''+x
  let i = 0,len = str.length,result= true
   while (len-1-i-i > -1) {
     if (str[i]!== str[len-1-i]) {
       result = false
       break
     }
     i++
   }
   return result
};


//使用内置方法
var isPalindrome = function(x) {
  let str = String(x)
  return str === str.split('').reverse().join('')
}
