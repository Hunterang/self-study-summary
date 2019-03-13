function maoPao () {
  var arg = Array.from(arguments)[0]
  if(arg == null) return
  var len = arg.length
  for (var i = 0; i < len-1; i++) {
    for (var j = 0; j < len-1-i; j++) {
      if (arg[j]>arg[j+1]) {
        var temp = arg[j]
        arg[j] = arg[j+1]
        arg[j+1] = temp
      }
    }
    return arg
  }
}
//第一层循环代表循环的次数
//第二层代表每次循环比较次数
//每次都会把最大的放到最后，所以只需要比较前面的就可以了，第一次最后一位没有比较的了，所以次数为len-1
