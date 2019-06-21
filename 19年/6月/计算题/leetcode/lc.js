//一个整数数组中只有一项是单独的，其他的都是双数，找出单独的这一项。

var singleNumber = function(nums) {
    let number = nums[0]
    for(let i = 1;i < nums.length;i++) {
        number = number^nums[i]
    }
    return number
}


//查找众数

let findNuber = function (nums) {
  let newNums = [],result = null
  for (var i = 0; i < num.length; i++) {
    if (!newNums[num[i]]) {
      newNums[num[i]] = 1
    }else {
      newNums[num[i]]++
    }
    if (newNums[num[i]] > num.length/2) {
      result =  num[i]
      break
    }
  }
  return result
}

let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
//该方法使用于n*n矩阵，
function findExist (mat,target) {
  let pos = 0
  let result = false
  for (var i = 0; i < mat.length; i++) {
   if (mat[i][i] === target) {
     result = true
     break
   }
   if (mat[i][i] > target) {
     pos = i
     break
   }
  }
  for (var j = 0; j < pos; j++) {
    if (mat[j][pos] === target) {
      result = true
      break
    }
  }
  for (var k = 0; k < pos; k++) {
    if (mat[pos][k] === target) {
      result = true
      break
    }
  }
  return result
}
