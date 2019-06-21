//typescript作为js的一种趋势，有着它让前端大咖喜爱的一面，尽管这一面还不能够让初级玩家看见，但是
//怀着成为大咖的心，我还是对此进行了一些学习，为了以后的编程之美。
//1.接口  === 一个抽象类型，不包含数据和逻辑代码，一种规范和要求。
interface Husband {
  sex: string,
  age: Number,
  buyPackege?:Boolean
}
//该接口实现了一个对丈夫的规范、要求
let husband: Husband = {
  sex: 'man',
  age: '20',
  buyPackege: true
}


class vagitable {
  constructor(applePrice:Number) {
    this.apple = applePrice
  }
}

let vagi = new vagitable(5)

//规范函数类接口
interface buyFruit{
  (money:Number,fruit:string):Number
}

let myFruit: buyFruit
myFruit = function(money:Number,fruit:string):Number {
  let price = vagi[fruit]
  return money/price
}

myFruit(100,'apple')

//2.typescript的声明类型
//undefined Nunber string Boolean enum any void Array Tuple Null
var object: string = '' ;
let rs: any = '';
let add = function(n1:number):number{}
