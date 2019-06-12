//当arr中最大数字为20的时候,并且都是整数
//此方法将一串整数<21,按大小位置排列
//巧用数组下标的方法-------不过这个跟冒泡排序有什么区别吗-----针对多数据的情况会减少操作吗
let printInt = (arr= []) => {
  let temp = Array(21).fill(0),len= arr.length
  for (var i = 0; i < len; i++) {
    temp[arr[i]]++
  }
  for (var i = 0; i <21; i++) {
    for (var j = 0; j <temp[i] j++) {
      console.log(temp[i]);
    }
  }
//巧用取余-----越界判断

let op = 0;
for (var i = 0; i < n; i++) {
  op = n%k//也就是op最大为k-1
}

//双指针-----两个移动的设置快慢。但是具体应用尚未得知


//位移运算
//实现Math.pow  1----暴力计算法
function mathPow(m,n) {

  for (var i = 0; i < n; i++) {
    m* = n
  }
  return m
}
// 2 ---- 逼格提升位运算

function mathPow(m,n) {
  let num = 1
  let base = m
  while (n>0) {
    if (n&1 === 1) {
      num *= base
    }
    base*=base
    n = n>>1
  }
  return num
}

console.log(mathPow(10,2));

// 3----小小技巧

let n
 //然而并不准确
 n/2 == n>>1  n/4 == n>>2 n/8 == n>>3
 //判断奇数偶数
 n&1 === 1





//哨兵设置   ----- 就举个例子  点击li列表的时候 设置一个哨兵为当前li元素，操作其他的li元素将哨兵替换
//这样达到跳转，颜色变化的效果
