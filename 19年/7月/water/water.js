// let fluent = {
//   clientWidth: document.documentElement.clientWidth
//   $opt: null,
//   heightArr: [],
//   init(opt) {
//     if (opt.data === void 0) return false
//     if (opt.el === void 0 ) return false
//     if (opt.width === void 0)  opt.width = 200
//     if (opt.gap === void 0) opt.gap = 0
//     this.$opt = opt
//     this.clientWidth = this.clientWidth - opt.gap
//     let columns = Math.floor(clientWidth/(opt.width+opt.gap))
//     this.heightArr = Array(columns).fill(0)
//     this.createDom(opt.data)
//   },

//  -------计划写一个瀑布流，思量了半天做出最下面的设计，代码的话感觉没什么难度、
// ----- 复杂之处在于能否获得图片的高度，不能的话，前端需要大量的修改，问题在于每个图片都要加载完成才能进行js操作，获取到每个图片高度再进行页面渲染
let n = 0
image.onload = function () {
  getImageStyle(this)
  n++
  if (n !== image.length) return
    //证明所有的image都已经加载完成，一起操作
    //下面的方法将会通知创建瀑布流
  notify()
}
image.onload = function () {
  getImageStyle(this)
  //下面的方法会创建节点存入文档碎片，
  //存在问题图片加载失败，所以这个也需要进行判断
  setPositon()
  n++
  if (n === image.length) {
    show()
  }
}

// ------- 下拉加载问题
function initFlueObject() {
  //创建相应的对象，在当前页面下进行数据存储，还需要考虑到缓存问题，刷新数据丢失问题
}
function flueWater(data) {
  //生成瀑布的过程
  //查看相应的数据是否给予相应的height{分情况来处理}
}


//封装一个加载的方法，当下拉到底部时候触发该方法，至于缓存问题仍然是一个需要解决的问题
$.ajax({
  success(data) {
    flueWater(data)
  }
})
