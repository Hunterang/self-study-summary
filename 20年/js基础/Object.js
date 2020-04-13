/**
*该文件准备对Object的情况进行剖析
*/
let obj = {
  a: 1,
  [Symbol('foo')]:2
}
let sym = Object.getOwnPropertySymbols(obj)
let obj1 = {}
for(let key of sym){
  obj1[key] = obj[key]//此方法可以操作
}
for(var key in obj) {
  console.log(key,obj[key]);
}
let result = Objet.assign({}, obj, options)
//第一次传入的参数将被改写，并且返回，拷贝最浅的一层
//也可以拷贝symbol类型的数据
Object.getOwnPropertySymbols(obj)//拿到symbol的属性
