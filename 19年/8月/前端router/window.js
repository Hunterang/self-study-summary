//关于加载时间performance
let start = performance.timing.navigationStart//地址栏按下回车键的时间

function revese(str) {
  if (!str) return null;
  let result = ''
  if (str/10 < 1) {
    result +=  str%10
  }else {
    result += str%10+revese(Math.floor(str/10))
  }
  return result
}

function deepFind(node) {
  let nodeList = []
  let pushNode= function(node) {
    if(!node) return null;
    nodeList.push(node)
    let nodeChilds = node.children || []
    Array.from(nodeChilds).forEach(child => {
      pushNode(child)
    })
  }
  pushNode(node)
  return nodeList
 }





//下面代码是抄袭过来的，这个是测试浏览器内核的方法
window.logInfo.mobile = mobileType();
function mobileType() {
  var u = navigator.userAgent, app = navigator.appVersion;
  var type =  {// 移动终端浏览器版本信息
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    iPad: u.indexOf('iPad') > -1, //是否iPad
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
  };
  var lists = Object.keys(type);
  for(var i = 0; i < lists.length; i++) {
    if(type[lists[i]]) {
      return lists[i];
    }
  }
}
/*我是来吐槽的 看看下面的公式，看似哇好厉害，但是经不起仔细的推敲*/
let unary = fn => val => fn(val)
//让我们分解一下
let sfn = val => fn(val)
//上面的写法是不是可以简化一下呢？
let sfn = fn
//最上面的公式继续简化，是不是就是下面了呢？
let unary = fn => fn  //传递进入在return出来接收， 哈哈哈，这是搞笑吗？
//看看下面最终的结果是不是想吐，传入fn返回fn，直接引用不可以啊吗
let unary = fn
