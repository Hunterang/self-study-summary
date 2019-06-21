let select = (arr) => {
  let len = arr.length
  let minIndex = 0
  let current = 0

  for (var i = 0; i < len-1; i++) {
    minIndex = i//每次交换完成之后都将下一个视为最小开始比较
    for (var j = i+1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j//此处跟换了minIndex,所以比较之后arr[minIndex]是最小的
      }
    }
    current = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = current
  }
  return arr
}


function conText () {
  let a = 'bao'
  return function() {
    console.log(a);
    console.log(this);
  }
}
conText()()
