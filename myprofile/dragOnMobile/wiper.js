var o = {//可以将0封装成一个构造函数，把方法变成原型的方法进行操作
  el: document.querySelector('.inner'),
  container: document.querySelector('.outer'),
  isMoved: true,
  touches: {
    x: 0,
    y: 0,
    endx: 0,
    endy: 0,
    base: 0,
    postion: 0,
    scrollWidth: 0,
    isAllowedLeft: true,
    isAllowedRight: true
  },
  type: null,
  init(dis=0) {
    this.container.scrollLeft = dis
    this.touches.base = dis
    this.touches.position = dis
    this.touches.scrollWidth = parseInt(window.getComputedStyle(this.el,null)['width'])
    - parseInt(window.getComputedStyle(this.container,null)['width'])
    if (this.scrollWidth < 0) {
      return false
    }
    this.el.addEventListener('touchstart',function (e) {
      this.start(e)
    }.bind(this),false)
    this.el.addEventListener('touchmove',function (e) {
      this.move(e)
    }.bind(this),false)
    this.el.addEventListener('touchend',function (e) {
      this.touchEnd(e)
    }.bind(this),false)
  },
  start(e) {
    if (e.type === 'touchstart') {
      this.touches.x = e.targetTouches[0].pageX
      this.touches.y = e.targetTouches[0].pageY
    }
  },
  move(e) {
    e.preventDefault()
    var tc = this.touches
    tc.endx = e.targetTouches[0].pageX
    tc.endy = e.targetTouches[0].pageY
    if (tc.endx > tc.x) {
      if ( tc.position <= tc.base ) {
        this.container.scrollLeft -= 1/2
      }else {
        this.container.scrollLeft -= tc.endx - tc.x
      }
    }
    if (tc.endx < tc.x) {
      if ( tc.position >= tc.scrollWidth - tc.base ) {
        this.container.scrollLeft += 1
      }else {
        this.container.scrollLeft  +=   tc.x - tc.endx
      }
    }
    tc.x = tc.endx
    tc.y = tc.endy
    tc.position = this.container.scrollLeft
  },
  touchEnd(e) {
    var tc = this.touches
    if (tc.postion < tc.base) {
      this.container.scrollLeft = tc.base
    }
    if (tc.postion > tc.scrollWidth - tc.base) {
      this.container.scrollLeft = tc.scrollWidth - tc.base
    }
  }
}
