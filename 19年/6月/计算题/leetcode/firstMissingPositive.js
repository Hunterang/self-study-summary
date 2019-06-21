//所以说多做题有好处，这个是我自己写的，在运算上击败了98%的js提交人，内存上击败了91%的提交人
//这个题主要考察返回一个数组中缺失的最小正整数

//数组下标做题
let firstMissingPositive = function (nums) {
  let arr = [0]
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]>0) {
      arr[nums[i]]= arr[nums[i]]? arr[nums[i]]++ : 1
    }
  }
  let result = null,len =arr.length
  for (var j = 1; j < len; j++) {
    if (!arr[j]) {
      result = j
      break
    }
  }
  result = result === null ? len : result
  return result

}
firstMissingPositive([3,4,-1,1])



//求两个数组的中位数
var findMedianSortedArrays = function(nums1, nums2) {
    let result = []
    while(nums1.length && nums2.length) {
      if (nums1[0] > nums2[0]) {
        result.push(nums2.shift())
      }else {
        result.push(nums1.shift())
      }
    }
    while (nums1.length) {
      result.push(nums1.shift())
    }
    while (nums2.length) {
      result.push(nums2.shift())
    }
    let len = result.length
    return len%2 === 0 ? (result[len/2]+result[len/2-1])/2 : result[(len-1)/2]

};
findMedianSortedArrays([1, 2],[3, 4])

//从新写一个

var findMedianSortedArrays = function(nums1, nums2) {
  let i = 0
  while (i < nums1.length) {
    if (!nums2[0]) {
      break
    }
    if (nums1[i] > nums2[0]) {
      nums1.unshift(nums2.shift())
      i++
    }
  }
  if (nums2.length) {
    nums1.concat(nums2)
  }
  let len = nums1.length
  return len%2 === 0 ? (nums1[len/2]+nums1[len/2-1])/2 : nums1[(len-1)/2]
}
findMedianSortedArrays([1, 2],[3, 4])
