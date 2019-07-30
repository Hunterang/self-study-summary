//这个是一个错误的示范，大数相称需要用到新方法

var multiply = function(num1, num2) {
    let result = 0,len = num1.length
    for (var i = 0; i < len; i++) {
      result += num1[i]*Math.pow(10,len-1-i)*num2
    }
    return result
};
