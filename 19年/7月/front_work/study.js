//防抖节流好吧已经写了
/***1 -map(parseInt)***/
['1','2','3'].map(parseInt)  // [1,NaN,NaN]

//map函数传递给cb 3个参数 map(cb(value,index,self))
//parseInt() 只需要需要两个函数
//parseInt('1',0) === 1 第二个参数为0时自动10进制
//parseInt('2',1) === NaN 你见过1进制的吗
//parseInt('3',2) === NaN 数字超过进制本身已经出错了


/***2 set map***/
/**
**Set 1/成员不能重复
      2、只有键值，是类数组
      3、可以遍历方法有has, delete, add, clear
**
**Map 类似对象，键值对的结合
**/
let arr = []
let set = new Set(arr)
[...set]//去重

set.length //undefined
set.size //这个是对的用法

let m = new Map() //字典
const o = {p: 'haha'}
m.set(o,'content')
m.get(o) //content
m.has(o)//以key value的形式存储数据

/***3 深度遍历和广度遍历***/
function bfc(node) {
  let nodes = []
  let point = []
  if (node) {
    nodes.push(node)
    let children = node.children
    for (var i = 0; i < children.length; i++) {
      nodes.push(children[i])
      if (children[i].children.length) {
        point.push(children[i])
      }
    }
    while (point.length) {

    }
  }
}
//深度优先
function () {
  let nodes = []
  let a =  function (node) {
    if (node) {
      nodes.push(node)
      let children = node.children
      for (var i = 0; i < children.length; i++) {
          a(children[i])
      }
    }
    return  nodes;
  }
  return  a ;
}

//广度优先
function ( node ) {
  let stack = []
  let nodes = []

  nodes.push (stack)
  while (stack.length) {
    let item = stack.shift()
     let children = item.children
     nodes.push(item)

     for (var i = 0; i < children.length; i++) {
         stack.push(children[i])
     }
  }
}

/************深度优先广度优先拷贝*************/

let dfsDeepClone = (arr) => {
  if( !arr || typeof arr !== 'object' ) return
  let store = arr instanceof Array ? [] : {}
}
