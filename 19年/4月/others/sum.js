function sum (...args) {
  return args.length > 1
  ? args.reduce( (a,b) =>  a + b)
  : (num) => args[0] + num
}
 //斐波那shulie
 function arr (max) {
   var a = 0,
       b = 1,
      arr = [ 0 ,1 ]

      while( arr.length < max) {
        [a,b] = [b,a+b]//右侧是对值的使用，左侧代表将被赋值
        arr.push(b)
      }
      return arr
 }

 function* say () {
   yield 1;
   yield ~function (val) {
    return val+ 2};
   yield 3;
 }
var res = say()
 console.log(res.next());
//next()是对yield的整体传参，
//而yield相当于直接return出来数据，终止函数
