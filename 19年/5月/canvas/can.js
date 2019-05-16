
// class ffchart {
//   constructor() {
//
//   }
//   init(option) {
//
//   }
// }

var fchart = {  
  stars: [],
  area: {},
  size: {
    len: 4,
    r: 2
  },
  init(el) {
     if (this.isCanva(el)) {
       this.$can = el
     }else {
       this.$can = document.createElement('canvas')
       this.$can.width =
       parseInt(window.getComputedStyle(el,null)['width'])||document.documentElement.clientWidth
       this.$can.height = document.documentElement.clientHeight
       el.appendChild(this.$can)
     }
     this.$cxt = this.$can.getContext('2d')
     this.area = {
       w: this.$can.width,
       h: this.$can.height
     }
     return this
  },
  setOption(opt) {
     this.num = opt.num || 100
     let { stars,random,area } = this
     for (var i = 0; i < this.num; i++) {
       let point = {
           x : random(0,area.w-4),
           y: random(0,area.h-4),
           xv: random(0,4),
           yv: random(0,4),
           shape:  Math.random() > 0.5 ? 'square': 'circle'
       }
       stars.push(point)
     }
     console.log(stars);
  },
  drawPoint(cxt,opt) {
    // let { size,area } = this
    // let point = {
    //   x : this.random(0,area.w-4),
    //   y: this.random(0,area.h-4)
    // }

    cxt.beginPath()
    // var shape = Math.random > .5 ? 'square': 'circle'
    if (opt.shape == 'square') {
      cxt.fillReact(point.x,point.y,point.x+size.len,point.y+size.len)
    }else {
      cxt.arc(point.x,point.y,size.r,0,Math.PI*2)
    }
    cxt.fill()
  },
  animate() {
    let { area,stars } = this
    var opts,i
    this.cxt.clearReact(0,0,area.w,area.h)
    for (i = 0; i < this.num; i++) {
       opts = {
         x: this.random(0,4),
         y: this.random(0,4),
       }
      initPoint( this.cxt, opts )
    }
  },
  random(s,end) {
    return Math.floor(Math.random()*(end-s)) + s
  },
  isCanva(el) {
    console.log(el);
    return  el.nodeName.toLowerCase() === 'canvas'
  }
}
