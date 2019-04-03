function FactoryCanvas(opt) {
  if(this.constructor != FactoryCanvas) { return }

  this.canva = null
  this.init(opt)
}

function minxClick( FactoryCanvas ) {
    FactoryCanvas.prototype.mousedown = function (e,value,fn) {
      var door = false
      var startX,startY,dsX,dsY
      e = e||window.event
      e.stopPropagation()
      startX = e.clientX
      startY = e.clientY
      if (value.dataset['status'] == 'true') {
        var num = fn.update(startX,startY,value)
        if (num == 1) {
          return
        }
      }
      fn.next()
      value.dataset['status'] = 'true'
      value.style.background = '#666'
      value.style.zIndex = 999
      fn.before(value)
      window.onmousemove = function (e) {
          e = e||window.event
          dsX = e.clientX - startX
          dsY = e.clientY - startY
          if (dsX!==0 || dsY!==0) {
            door = true
            value.dataset['move'] =  'true'
            value.style.left = Number(value.dataset['x']) + dsX + 'px'
            value.style.top = Number(value.dataset['y']) + dsY + 'px'

        }
        // console.log(value.style.top);
      }

      value.onmouseup = function () {
        window.onmousemove = null

        if (door == true) {
          value.dataset['y'] = value.offsetTop
          value.dataset['x'] = value.offsetLeft
          value.dataset['status'] = 'false'
        }else {
          if (fn) {
            fn.after(value)
          }
        }
        value.style.zIndex = 1
      }
    }
}

function mixinHover( FactoryCanvas ) {
  FactoryCanvas.prototype.hover = function (obj) {

    obj.onmouseenter = function () {
      if (this.dataset['status'] == 'false') {
        this.style.background = '#666'
      }
    }
    obj.onmouseleave = function () {
      if (this.dataset['status'] == 'false') {
        this.style.background = '#eee'
      }
    }
  }
}



function minxInit(FactoryCanvas) {
  FactoryCanvas.prototype.init = function (opt) {
    this.canva = document.createElement('canvas')
    this.cxt = this.canva.getContext('2d')
    this.canva.width = opt.width || 0
    this.canva.height = opt.height || 0
    this.canva.style.position = 'absolute'
    this.canva.style.background = '#eee'
    this.canva.style.top = opt.netY+'px'
    this.canva.style.left = opt.netX+'px'
    this.canva.dataset.move = 'false'

    this.canva.dataset.x = opt.netX
    this.canva.dataset.y = opt.netY
    this.canva.dataset.status = 'false'
    opt.dom.appendChild(this.canva)
    //鼠标划过时的变化
    this.hover(this.canva)
    opt.fn = opt.fn
    this.canva.addEventListener('mousedown',function(e) {
      e.stopPropagation()
      e = e || window.event
      this.mousedown(e,this.canva,opt.fn)
    }.bind(this),false)


    this.drawStyle( this.cxt,opt.series )
  }
}

function mixnDrawStyle(FactoryCanvas) {
  FactoryCanvas.prototype.drawStyle = function( cxt,opt ) {
    function drawbox ( cxt,opt ) {
      opt.numx = opt.numx || 0
      if (opt.numx == 1) {
             var linegread = cxt.createLinearGradient(opt.x,opt.y,opt.w,opt.h);
             linegread.addColorStop(0,opt.colors);
             linegread.addColorStop(1,opt.color);
             cxt.fillStyle = linegread;
             cxt.fillRect(opt.x,opt.y,opt.w,opt.h)
             return
         }
         cxt.beginPath();
         cxt.fillStyle = opt.color;
         cxt.fillRect(opt.x,opt.y,opt.w,opt.h);
         cxt.fill();
    }

    function drawcircle ( cxt,opt ) {
      cxt.beginPath();
      cxt.fillStyle = opt.color || '';
      cxt.strokeStyle = opt.color1 || '';
      cxt.lineWidth = opt.l || 1 ;
      cxt.arc(opt.x,opt.y,opt.r,opt.p0,opt.p1);
      opt.choose == 0 ? cxt.fill() : cxt.stroke();
    }

    function drawline ( cxt,opt = {} ) {
          cxt.beginPath();
          cxt.strokeStyle = opt.color || '';
          cxt.lineWidth = opt.l || 1 ;
          cxt.moveTo(opt.num[0],opt.num[1]);
          cxt.lineTo(opt.num[2],opt.num[3]);
          if (opt.num.length>4) {
            cxt.lineTo(opt.num[4],opt.num[5]);
          }
          cxt.stroke();
    }

    function drawword ( cxt,opt ={} ) {
        cxt.beginPath()
        cxt.fillStyle = opt.color || ''
        cxt.lineWidth = opt.l || 1
        cxt.font = opt.font || ''
        if (!/[A-z]/.test(opt.data.DisplayName)) {
          cxt.fillText(opt.data.DisplayName.slice(0,4),51,12)
          cxt.fillText(opt.data.DisplayName.slice(4),51,25)
        }else {
          cxt.fillText(opt.data.DisplayName.slice(0,6),55,12)
          cxt.fillText(opt.data.DisplayName.slice(6),55,25)
        }
        var danwei = opt.data.unitstr == '无单位' ? '' : opt.data.unitstr;
        var  valuex  = opt.data.SensorValue == "-999.90"  ? '无数据' : opt.data.SensorValue+danwei;
        cxt.fillText(valuex,55,45)
        cxt.fill()
      }
      function drawFlicker (cxt,opt) {
            drawbox( cxt,opt )
        setInterval(() => {
          cxt.clearRect(2,2,7,10)
          setTimeout(() => {
            drawbox( cxt,opt )
          },600)
        },1200)
      }
      drawbox( cxt,opt.box )
      drawcircle( cxt,opt.circle )
      drawline( cxt,opt.line )
      drawword( cxt,opt.word )
      drawFlicker( cxt,opt.flicker )
  }
}

minxInit(FactoryCanvas)
mixnDrawStyle(FactoryCanvas)
minxClick(FactoryCanvas)
mixinHover(FactoryCanvas)
export default FactoryCanvas
