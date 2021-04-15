let gradientColor = function(startColor, endColor, step) {
    let startRGB = this.colorRgb(startColor); //转换为rgb数组模式
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];
  
    let endRGB = this.colorRgb(endColor);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];
  
    let sR = (endR - startR) / step; //总差值
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;
  
    let colorArr = [];
    for (let i = 0; i < step; i++) {
      //计算每一步的hex值
      let hex = this.colorHex('rgb(' + parseInt((sR * i + startR)) + ',' + parseInt((sG * i + startG)) + ',' +
                              parseInt((sB * i + startB)) + ')');
      colorArr.push(hex);
    }
    return colorArr;
  };
  
           // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
  gradientColor.prototype.colorRgb = function(sColor) {
    let reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      let sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return sColorChange;
    } else {
      return sColor;
    }
  };
  
  
  // 将rgb表示方式转换为hex表示方式
  gradientColor.prototype.colorHex = function(rgb) {
    let _this = rgb;
    let reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = hex < 10 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      let aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += (aNum[i] + aNum[i]);
        }
        return numHex;
      }
    } else {
      return _this;
    }
  };

function Zchart(params) {
    
}
Zchart.init = function(el) {
    let chart =  new Zchart()
    chart.init(el)
    return chart
}
Zchart.prototype = {
    init(el) {
        if(typeof el == 'string') {
            this.$el = document.getElementById(el)
        }else {
            this.$el = el
        }
        
         this.initWh()
         

        let cav = document.createElement('canvas')
        if(this.$el.children.length == 2) {
            cav = this.$el.children[1]
        }
        cav.width = this.width 
        cav.height = this.height
        this.$el.appendChild(cav)
         this.ctx = cav.getContext('2d')
        //  this.ctx.clearRect(this.width, this.height)
         return this
    },
    getSyle(el, attr) {
        return getComputedStyle(el, null)[attr]
    },
    setOptions(opt) {
        if(!this.colorList) {
            // let { start, end} = opt
            let start = opt.start || '#1a3663'
            let end = opt.end || '#f8374e'
            this.colorList = new gradientColor(start, end, 360)
        }
        this.options = opt || {}
        this.ctx.clearRect(0,0,this.width, this.height)
        // setTimeout(() => {
            // this.initWh()
            this.drawArc()
        // }, 300);
    },
    initWh() {
        this.height = this.getSyle(this.$el, 'height')
         this.width = this.getSyle(this.$el, 'width')

         this.height = parseInt(this.height)
         this.width = parseInt(this.width)
    },
    drawArc() {
        let center = {
            x: this.width/2,
            y: this.height/2
        }
        let r = this.options.r || center.x*0.8
        let start = (3/4)*Math.PI
        let end =    2*Math.PI + (1/4)*Math.PI

        this.ctx.lineWidth = this.options.width || 40
        let base = this.ctx.lineWidth

        this.drawInner(center,r, start + Math.PI/18 , end - Math.PI/18)
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#1e65da'
        this.ctx.arc(center.x, center.y, r, start - Math.PI/120, start)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#1d355e'
        this.ctx.arc(center.x, center.y, r, start, end)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.beginPath()
        this.ctx.strokeStyle = '#1e65da'
        this.ctx.arc(center.x, center.y, r, end, end+ Math.PI/120)
        this.ctx.stroke()
        this.ctx.closePath()

        let ring1 = this.ctx.createLinearGradient(center.x , 0,center.x, center.y + r)
        ring1.addColorStop(0,'#4485fb');
        ring1.addColorStop(0.3,'#4485fb');
        ring1.addColorStop(1,'rgba(68,133,251,0.1)');
        this.ctx.strokeStyle = ring1
        this.ctx.lineWidth = 1
        this.ctx.beginPath()
        this.ctx.arc(center.x, center.y, (r - 10 - base/2), start, end)
        this.ctx.stroke()
        this.ctx.closePath()
        this.drawGradient(center, Math.PI/4)



        // let ring = this.ctx.createLinearGradient(0 , center.y,this.width,center.y)
        // ring.addColorStop("0",'rgba(255,255,255,0.2)');
        // ring.addColorStop("0.4",'#67375b'); 
        // ring.addColorStop("1.0",'#ff2e5a'); 
        let rate = this.options.rate || 80
        let ends = (end - start)*rate/100 + start
        // this.ctx.strokeStyle = ring
        // this.ctx.lineWidth = this.options.width || 40
        // this.ctx.beginPath()
        // this.ctx.arc(center.x, center.y, r, start, ends)
        // this.ctx.stroke()
        // this.ctx.closePath()
        this.ctx.lineWidth = base
        this.ctx.strokeStyle = '#f11'
        this.ctx.beginPath()
        this.ctx.arc(center.x, center.y, r, ends-Math.PI/80, ends)
        this.ctx.stroke()
        this.ctx.closePath()
       
        this.ctx.save()

        let disx = Math.sqrt(r*r/2)
        console.log(disx)
        let p1 = [center.x - disx - 5, center.y + disx-5]
        this.ctx.fillStyle = '#4485fb'
        this.ctx.fontSize= 14
        let orgin = '0' 
        let {width} = this.ctx.measureText(orgin)
        let t1 = p1[0] + width/2 ,t2 = p1[1] + this.ctx.fontSize/2
        this.ctx.translate(t1, t2)
        this.ctx.rotate(-40*Math.PI/180)
        this.ctx.translate(-t1, -t2)
        this.ctx.fillText(orgin,...p1)
        this.ctx.beginPath()

        this.ctx.translate(t1, t2) 
        this.ctx.rotate(40*Math.PI/180)
        this.ctx.translate(-t1, -t2)  

        let final = this.options.final || '100'
        let width1 = this.ctx.measureText(final).width
        let p2 = [center.x + disx - width1/2 , center.y + disx-5]   
        let f1 = p2[0] + width1/2 ,f2 = p2[1] + this.ctx.fontSize/2
        this.ctx.translate(f1, f2)
        this.ctx.rotate(45*Math.PI/180)
        this.ctx.translate(-f1, -f2)
        this.ctx.fillText(final,...p2)
        this.ctx.rotate(-45*Math.PI/180)

        this.ctx.restore()


        // let ring = this.ctx.createLinearGradient(0 , center.y,this.width,center.y)
        // ring.addColorStop("0",'rgba(255,255,255,0.2)');
        // ring.addColorStop("0.4",'#67375b'); 
        // ring.addColorStop("1.0",'#ff2e5a'); 
        // let rate = this.options.rate || 80
        // let ends = (end - start)*rate/100 + start
        // this.ctx.strokeStyle = ring
        // this.ctx.lineWidth = this.options.width || 40
        // this.ctx.beginPath()
        // this.ctx.arc(center.x, center.y, r, start, ends)
        // this.ctx.stroke()
        // this.ctx.closePath()

        // this.ctx.strokeStyle = '#f11'
        // this.ctx.beginPath()
        // this.ctx.arc(center.x, center.y, r, ends-Math.PI/80, ends)
        // this.ctx.stroke()
        // this.ctx.closePath()


        // let distanst = (end - start)*rate/100

        // let current = 0
        // let that = this
        // function draw() {
        //     console.log('draw')
        //     let tip =  window.requestAnimationFrame(draw.bind(this))
        //     let add = (distanst - current) / 20
        //     current = add + current

        //     this.ctx.beginPath()
        //     this.ctx.arc(center.x, center.y, r, start, current + start)
        //     this.ctx.stroke()
        //     this.ctx.closePath()
        //     if(distanst - current < Math.PI/180) {
        //         window.cancelAnimationFrame(tip)
        //         console.log(5)
        //         this.ctx.beginPath()
        //         this.ctx.arc(center.x, center.y, r, start, ends)
        //         this.ctx.stroke()
        //         this.ctx.closePath()

        //         this.ctx.strokeStyle = '#f11'
        //         this.ctx.beginPath()
        //         this.ctx.arc(center.x, center.y, r, ends-Math.PI/80, ends)
        //         this.ctx.stroke()
        //         this.ctx.closePath()

        //     }

        // }

        // draw.call(this)
        
        

        
    },
    drawInner(center,r, start, end) {
        this.ctx.beginPath()
        let ring1 = this.ctx.createLinearGradient(center.x , 0,center.x, center.y + r)
        ring1.addColorStop(0,'#1a2f52');
        ring1.addColorStop(1,'rgba(26,47,82,0)');
        this.ctx.strokeStyle = ring1
        this.ctx.arc(center.x, center.y, r + 20, start, end)
        this.ctx.stroke()
    },

    drawGradient(center, start) {
        // let colorNeed = this.colorList
        let rate = this.options.rate || 80
        let dis = Math.ceil(270*rate/100)
        if(dis == 0) return
        let colorNeed = this.colorList.slice(0, dis)
        let lw = this.options.width || 40
        let r = this.options.r || center.x*0.8 

        let rates = (r -lw/2)/(r + lw/2)

        for (let index = 0; index < dis; index++) {
            var deg = index*Math.PI/180 + start
           
            this.ctx.save()
            this.ctx.beginPath()
            this.ctx.lineWidth = 2
            this.ctx.strokeStyle = colorNeed[index]

            

            let endX = center.x - (r+ lw/2) * Math.sin(deg)  
            let endY = center.y + (r+ lw/2) * Math.cos(deg)  
             
            // this.ctx.moveTo(center.x, center.y)
            this.ctx.moveTo(center.x + (endX - center.x)*rates, center.y + (endY - center.y)*rates)
            this.ctx.lineTo(endX, endY)
            this.ctx.closePath()
            this.ctx.stroke()
        }
    }
}




export default Zchart