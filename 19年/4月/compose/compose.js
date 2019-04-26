let arr = [1,2,3]

function add(x,y) {
  console.log(x,y);
  return x+y
}

arr.reduce(add())
//这个是聚合函数的基础、、、//还有递归调用的方法，原理都是遍历数组
