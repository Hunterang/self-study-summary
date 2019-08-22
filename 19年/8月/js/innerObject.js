window
Object
Array
Date
RegExp
fetch/XMLHttpRequest
Function
RegExp
Math
Boolean
String
Error
arguments
Number
JSON
[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })
//$$('*') 表示 document.querySelectAll('*')
//~~a 表示 parseInt(a)
let getMaxSubtract = arr  => {
  if (arr.length<2) return null;
  let max=arr[0],min=arr[0]
  for (var i = 1; i < arr.length; i++) {
    max = arr[i]> max? arr[i]: max
    min = arr[i]< min? arr[i]: min
  }
  return max-min
}
