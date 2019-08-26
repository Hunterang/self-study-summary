var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();
//结果是1


//javascript 采用词法作用域，函数的作用域在函数定义<也就是说创建>的时候就已经决定了。<静态作用域>

//与词法作用域相对应的是动态作用域，函数的作用域在函数调用的时候才会产生。<非js特性>//

//js中有作用域链，当函数执行的时候内部的作用域才会产生，不执行就没有意义。
function a {
  let value = 's'
  let b = function() {

  }
  return b
}

//以上便是js中的词法作用域，执行的环境，执行的范围。内部函数可以继承外部函数的作用域，寻找变量的时候会由近及远。





/*执行期上下文，函数执行的时候产生上下文，跟词法作用域关系极为密切*/

//执行期上下文由牙栈的方式存入内存，内部的函数执行也会压入执行栈，最后一次pop()掉执行期上下文。


/**1**/
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
/**2**/
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();


//分析1,2虽然1和2的结果是一样的但是ECMA执行却不一样
// 让我们模拟第一段代码：
// ECStack.push(<checkscope> functionContext);
// ECStack.push(<f> functionContext);
// ECStack.pop();
// ECStack.pop();
// 让我们模拟第二段代码：
// ECStack.push(<checkscope> functionContext);
// ECStack.pop();
// ECStack.push(<f> functionContext);
// ECStack.pop();

var a = [1]

function f(a) {
  var a
  a[100] = 3
  a = [1,2,3]
}
f(a)

//上面的题的关键在于f(a)执行的时候，在内部生成了一个变量a 他的优先级比较低，如果内部存在var a 那么依旧会被形参取代，最终变为实际参数
// 如果存在function a() 那么内部的a代表的是funciton ，因为函数是一等公民
