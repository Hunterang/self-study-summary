let sort = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {//循环多少轮ps:每轮把最大的放到最后
    for (var j = 0; j < arr.length - i ; j++) {//每轮循环多少次
      if (arr[j] < arr[j+1]) {
        //两两比较，大的放后
        let tep = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tep
      }
    }
  }
  return arr

}

let sort1 = (arr) => {
  for (var i = 0; i < arr.length; i++) {//从数组中挑选出一个ps：跟其余任何一个比如果有小的就交换值
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tep = arr[i]
        let arr[i] = arr[j]
        arr[j] = tep
      }
    }
  }
  return arr;
}
