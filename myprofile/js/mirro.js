function mirro(target,aim) {
  var distance = target.getBoundingClientRect()
  target.onmouseenter = function (e) {
    var timer = null,dsta,dstb,dstya,dstyb
    e = e || window.event
    aim.style.display = 'block'
    target.onmousemove = function (e) {
      // aim.style.opacity = .5
      // clearTimeout(timer)
      // timer = setTimeout(() => {
      //   aim.style.opacity = 1
      // },200)
      aim.style.top = e.clientY - getStyle(aim,'height')/2- distance.y + 'px'
      aim.style.left = e.clientX - getStyle(aim,'width')/2- distance.x + 'px'
      if (e.clientX - distance.x < getStyle(aim,'width')/2) {
        aim.style.left = 0

      }
      if (e.clientY - distance.y < getStyle(aim,'height')/2) {
          aim.style.top = 0
        }
      if (distance.x + getStyle(target,'width') - e.clientX < getStyle(aim,'width')/2) {
            aim.style.left = getStyle(target,'width') - getStyle(aim,'width') + 'px'
        }
          //
      if (distance.y + getStyle(target,'height') - e.clientY < getStyle(aim,'height')/2) {
              aim.style.top = getStyle(target,'height') - getStyle(aim,'height') + 'px'
        }
      dstya = e.clientY - distance.y
      dsta = e.clientX - distance.x
      dstyb =  dstya - parseInt(aim.style.top)
      dstb =  dsta - parseInt(aim.style.left)
        aim.style.backgroundPositionX = (-2*dsta + dstb) + 'px'
        aim.style.backgroundPositionY = (-2*dstya + dstyb) + 'px'
    }
  }

  target.onmouseleave = function (e) {
    aim.style.display = 'none'
    target.onmousemove = null
  }
}

function getStyle(obj,attr) {
  if (window.getComputedStyle) {
    return parseInt(window.getComputedStyle(obj,null)[attr])
  }
  return parseInt(obj.currentStyle[attr])
}
