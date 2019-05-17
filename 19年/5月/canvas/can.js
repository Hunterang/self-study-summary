

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
       this.$can.style.background = '#122233'
       el.appendChild(this.$can)
     }
     this.cxt = this.$can.getContext('2d')
     this.area = {
       w: this.$can.width,
       h: this.$can.height
     }
     return this
  },
  setOption(opt) {
     this.num = opt.num || 100
     let { stars,random,area,cxt,size} = this
     for (var i = 0; i < this.num; i++) {
       let point = {
           x : random(0,area.w-4),
           y: random(0,area.h-4),
           xv: random(-4,4),
           yv: random(-4,4),
           shape:  Math.random() > 0.5 ? 'square': 'circle'
       }
       stars.push(point)
     }

     let timer = setInterval(() => {
       cxt.clearRect(0,0,area.w,area.h)

       stars.forEach( v => {

         if (v.x + v.xv > area.w-4) {
           v.xv = -Math.abs(v.xv)
         }
         if (v.x <= 0) {
           v.xv = Math.abs(v.xv)
         }
         if (v.y + v.yv > area.h-4) {
           v.yv = -Math.abs(v.yv)
         }
         if (v.y <= 0) {
           v.yv = Math.abs(v.yv)
         }

         v.x = v.x + v.xv
         v.y = v.y + v.yv
         let opt = {
           x: v.x,
           y: v.y,
           shape: v.shape
         }

         this.drawPoint(cxt,opt)
       })

     },1000/60)
  },
  drawPoint(cxt,opt) {

    let { size } = this
    cxt.beginPath()
    cxt.fillStyle ='#557861'
    // var shape = Math.random > .5 ? 'square': 'circle'
    if (opt.shape == 'square') {
      cxt.fillRect(opt.x,opt.y,size.len,size.len)
    }else {
      cxt.arc(opt.x,opt.y,size.r,0,Math.PI*2)
    }
    cxt.fill()
  },

  link() {

  },
  random(s,end) {
    return Math.floor(Math.random()*(end-s)) + s
  },
  isCanva(el) {
    console.log(el);
    return  el.nodeName.toLowerCase() === 'canvas'
  }
}
