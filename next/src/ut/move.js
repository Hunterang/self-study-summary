
 function move (obj,option) {
   clearInterval( object.timer)
   var door = true
   object.timer = setInterval( () => {
     Object.keys(option).forEach((val,index) = {
       var currentattr = parseInt(getStyle(object,val))
       var speed = (obj[val]-currentattr)/6
       speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
       if (obj[val]!= currentattr) {
         door = false
       }
       obj.style[val] = currentattr + speed
     })
     if (door) {
       clearInterval(object.timer)
     }
   },20)
 }

 function getStyle (obj,attr) {
   if (window.getComputedStyle) {
     return window.getComputedStyle(obj,null)[attr]
   }
   return obj.currentStyle[attr]
 }
