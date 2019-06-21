
//js解决大数据计算的问题 ps:结果是错的的，天


var multiply = function(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) return '' //判断输入是不是数字
  var len1 = num1.length,
    len2 = num2.length
  var ans = []
  for (var i = len1 - 1; i >= 0; i--) {
    for (var j = len2 - 1; j >= 0; j--) {
      var index1 = i + j  //占的位置在哪里两数想乘的十位数
      var index2 = i + j + 1 //两数相乘的个位位置
      var mul = num1[i] * num2[j] + (ans[index2] || 0)  //首先相加
      ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0)//算出十位的数字||存在十位进一的问题
      ans[index2] = mul % 10//个位取余数
    }
  }
  var result = ans.join('')
    //这里结果有可能会是多个零的情况，需要转成数字判断
    //原来写的是return +result === 0 ? '0' : result，result字符串会出现有前置0的情况，感谢评论区小伙伴@nicknice的提醒让我找到了这个错误
    return +result === 0 ? '0' : result.replace(/^0+/,'')

}

console.log(multiply(999,99));
// 123
// 456
//最高多少位置,最高六位，index代表了其中的占位，上述算法其实代表了竖列位置的相加得到的数字，放到arr相应的位置
// [0,0,0,0,0,0]
