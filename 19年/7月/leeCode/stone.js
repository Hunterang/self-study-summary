//包含的总数s中包含j的总数
var numJewelsInStones = function(J, S) {
    let n = 0
    while(J.length) {
        var reg = new RegExp('('+J[0]+')','g')
        S.replace(reg, _ => {
          n++
          return ''
        })
        J = J.slice(1)
    }
    return n
};
numJewelsInStones('aA','aAAbbbb')
let n = 0
while( 1> 0) {
  n++
  if (n== 10) {
    break
  }
}
//最长不重复的字符串，尼玛最后拿10万考验我
var lengthOfLongestSubstring = function(s) {
  let i = 0, len = s.length, result= 0, str= ''
  while (i < len) {
    let index = str.search(s[i])
    if(index < 0){
    str +=s[i]
    i++
    }else {
      result = str.length > result? str.length: result
      i = i - (str.length-index-1)
      str = ''
    }
  }
  return result
}
//.两数之和暴力破解
var twoSum = function(nums, target) {
    let arr = []
    for (var i = 0; i < nums.length-1; i++) {
      for(var j =i+1; j < nums.length; j++ ){
        if(nums[i] + nums[j] === target) {
          arr.push(i)
          arr.push(j)
          break
        }
      }
      if (arr.length) {
        break
      }
    }
    return arr
};
