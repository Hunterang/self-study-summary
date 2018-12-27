function deepClone () {
  var arg = arguments[0]
  if (arg == '' || typeof(arg)!='object') {
    return '请输入对象';
  }
  var newObject = arg instanceof Array ? [] : {};
  Object.keys(arg).forEach(function (val,index) {
    if (!arg.hasOwenProperty(val)) {
      continue;
    }
    if (typeof(arg[val]) == 'object') {
      deepClone(arg[val])
    }else {
      newObject[val] = arg[val]
    }
  })
}
