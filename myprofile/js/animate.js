function move (obj,option,fn) {
    option = option || {};
    clearInterval(obj.timer) //一般都是点击事件触发，每次触发清除上一次的定时器，从新开启定时器，这样定时器不会重复，在防抖中有类似的应用
       obj.timer = setInterval(function () {//清除之后还是有点时间上的影响设置为if(object.timer) return
            var stop = true;
            for(var key in option) {
              var currentAttr = parseInt(getstyle(obj,key))
              var fspeed = (option[key]-currentAttr)/6;
              var speed = fspeed >0 ? Math.ceil(fspeed) : Math.floor(fspeed);
            if (parseInt(getstyle(obj,key)) != option[key]) {
               stop = false; //如果有没有完成的动画，就不让stop为true，无法最终清除定时器
            }
            obj.style[key] = currentAttr + speed + 'px';
          }
          if (stop) {
            clearInterval(obj.timer)
            if (fn) {
              fn();
            }
          }
      },20)
  }
//静态属性获得，只读的属性
  function getstyle(obj,attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    }else {
      return window.getComputedStyle(obj,null)[attr];
    }
  }
