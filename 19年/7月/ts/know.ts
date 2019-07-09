// i don`t think ts is difficult, it`s just a rule of computer languge.


//原始数据类型 boolean /string /number /null /undefined

let isDone: boolean = false

//new Boolean() 返回的是Boolean 对象 /Boolean(1) 返回boolean类型

//ps：0b 二进制 、、 0x 16进制 、、0o 八进制

let number: number = 6
let numberDe: number = 0xf00d || 0b111 || 0o123 || NaN || Infinity

let myName: string = 'peter'

let n: null = null; let u: undefined = undefined //ps: 只能被自己赋值


function ts(): void {}  //没有返回值
let boring: void = undefined || null //毫无意义的变量

let num: number = undefined //this`is ok

let myFavoritType: any = 'string' //any可以随意改变类型
myFavoritType = [] || 10 || false  //这都可以的


/**推断类型**/
//ts存在类型推断，一旦定义的变量被立即赋值，则会赋予默认的any类型
//let mytips = 'hello'
let mytips: string = 'hello'

let anytype //这样的情况默认any类型，未被赋值


/**联合类型**/
let uniformType: string | number
//ps: 当ts不能确定联合类型的类型是，我们只能使用他们的共同属性和方法
//联合类型被赋值之后ts会自动判定状态



/**接口**/
//ps:接口是对对象的抽象表现，(定义对象的类型)是对具体对象的一种规则要求
//定义的变量不能比接口的属性少，有多少，就需要多少，多了也不行
interface person {
  name: string;
  age: number;
}
let tom: person = {
  name: 'tom',
  age: 26
}
//可选属性 || 任意属性一旦被确定，那么其他属性需要是他属性的子集
interface newPerson {
  name: string;
  age?: number;
  [propName:string]:any;
}

//只读属性约束的是给对象的该属性赋值，而不是给只读属性赋值

interface man {
  readonly id: number;
}

/**数组类型**/
let arr: number[] = [1,2,3]
//ps这个是最简单的写法，类型+[]的写法

//数组泛型的写法
let arr1: Array<number> = [1,2,3]

//接口表示数组
interface numberArray {
  [index: number]:number;
}

let arr2: numberArray = [1,2,3]
//any类型表示允许出现多种类型
let arr3: any[] = [1,'2',{}]

//类数组不是数组所以不能用数组的接口和类型；常见的类数组有自己的类型
//IArguments NodeList HTMLCollection
function add() {
  let arg: IArguments = arguments;
}

//js一等公民
//减少不必要的代码，精简代码使得看起来非常清晰明了
// [].map(n => x=> add(n,x)) ==> [].map( n => add)

//function addF(v) {  return add(v) } ===> add(v)

//const getServerStuff = callback => ajaxCall(json => callback(json));
//解析
ajaxCall(json => callback(json))
//说明ajaxCall中传入了一个function,带参数json的
ajaxCall(callback)

getServerStuff = callback => ajaxCall(callback)
//同理可得
getServerStuff = ajaxCall

//函数组合
let compose = function(a,b) {
  return function(x) {
    a(b(x))
  }
}
//个人理解，a，b都是具体规则，都将对x进行处理，为了方便处理，于是将a，b合并在一起
//当compose执行之后生成一个新的函数
//就是将函数当参数传递
var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

shout("send in the clowns");

//命令式，声明式
// 命令式
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};

// 声明式  组合方式写法，不是硬性编码，让人一目了然，而compose则返回函数
var authenticate = compose(logIn, toUser);
//这个简直太美妙了
//根据我的理解公共代码的抽离就是不断的提取公因式的过程

//原型链构造函数写法，就是生成抽象的对象，再对对象进行相应的处理（赋予原型上方法）
//为了确定方法是否要执行，需要校验对象是否正常生成


//抽象到具体概念，例如生成一个canvas图表，分析图表的属性跟功能
//图表的属性大小，位置，颜色
//功能，展示，高亮，拖动，自适应等等

//以vue的框架为例子，生成具体的视图，数据劫持，不好抽象，有些复杂
//目的操作生成dom最后挂载，影响并且操作dom
//虚拟dom对象 、数据对象
//相应的方法

//考虑了半天想通了对象字面量跟new的区别，对象字面量更像是new的一个实例，而new是个工厂


//所以说框架是针对所有项目可以的，而对象字面量只适应于具体的项目实现的
//框架解决了dom跟data之间相互纠缠的问题，并且将相应后续操作结合进去

/**跑题了继续tsfunciton***/

function sum (x: number, y: number): number {
  return x+y
}
//定义了之后输入的形参不能多，也不能少(假设出来的，数学里边的设x)

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x+y
}
//手动给mySum添加类型 ts中用 => 表示函数定义
interface meSumf {
  (x: number, y: number): number;
}
let mesum: meSumf;
mesum = (x: number, y: number) {}
//可选参数只能放到最后

let search = function(x: string, y?: number): boolean {}

//ts中的扩展运算符算是一个对象，应该用数组表示
function combie(arr: any[], ...rest: any[]) {}

//ts重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {}

//ts 断言
function getLength(x: number | string): number {
  return (<string>x).length ? (<string>x).length: x.toString().length
}

//ts声明 对于第三方引入的声明
//declare var  声明全局变量 例如script标签中引入jq并不能正常使用全局$

declare var jQuery: (s: string) => any
//通常会把声明语句放到声明文件中,文件名需要是 .d.ts结束
//当jQuery.d.ts文件放到项目中所有.ts文件都可以获得jQuery类型定义
  //当然tsconfig.json中需要包含声明文件
declare const jQuery: () => any//声明全局常量最好，因为全局变量一般不允许修改
declare function jQuery(s: string): any //也是可以的
//支持重载
declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

//声明class
declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}
