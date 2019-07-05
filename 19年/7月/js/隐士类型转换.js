//隐式类型转换，是指系统执行的过程对不识别的数据进行内在转换的过程，需要一定的触发条件




'2' > '10'//true
//两面都是字符串比较的话，会先转换为charcodeAt()转为数字再比较

1>'0'
//字符串转为数字比较

1+true == 2
//转为数字


'1'+true = '1true'
//Boolean转为字符串

1+true+'' == '2'
''+true+1 == 'true1'
//谁在前先转化为谁的类型

1+undefined == NaN
1+null == 1

null == undefined
null != 0
+null = 0


//对象转换的过程先取得valueOf的值，再tostring   比较的时候再次转换为数字
if(a==1&&a==2&&a==3){}
//以上的表述证明a进行了隐士类型转换，每次判断中求出ValueOf(),再tostring()
//处理过程在于valueof

 let a = [1]
 a.valueOf = () => {return a[0]++}
 //强行增加valueOf不再调用原型链的方法
 //以上代码可以实现每次a==的时候进行一次valueof转换，导致数据++

let b = {
  i: 1,
  valueOf() {
    return i++
  }
}
//这个方法同上 面的道理是一样的,结果都是字符串



//[].valueOf() == []  [].toString() ==''   '' == 0
//{}.valueOf() =={} {}.toString() == '[object object]' {}不能直接用需要引用


//[2,3]隐式转换为'2,3'

[] !== [] //这个涉及到对象的引用问题，指向不同的内存
![] //会转化数组为boolean false false在跟[]进行比较ps:这里涉及到了运算优先级

{} !== {} //道理相同跟[]，但涉及到隐式类型转换则会出现不同

!{} == false
if({}) //允许写法，表示存在，但是跟true好像又不相同


//涉及到堆栈问题，解析一下
//1.值类型 ===>栈中存储的是基本数据类型，boolean string nuber undefined null
//2.引用类型 ===>栈中存储的是引用地址(用0xabcd表示)，堆中存储数据
