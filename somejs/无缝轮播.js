{
  scolls(p ={
		timer: 'interval'
	}) {
      let tb = p.el
      let tbody = tb.getElementsByClassName('tbody')[0]
      tbody.style.overflow = 'hidden'
      let height = getComputedStyle(tbody, null)['height']
      let widht = getComputedStyle(tbody, null)['width']
      let html = tbody.cloneNode(true)
      html.style.transition = '0.3s'
      let child = document.createElement('div')
      child.style.cssText = 'overflow:hidden;width:' + widht
      child.appendChild(html)
      tbody.innerHTML = ''
      tbody.appendChild(child)

      let distance = parseInt(height) / this.datasource1.length

      let start = 0
      let fun = () => {
        html.style.transition = '0s'
        start = 0
        html.style.transform = `translateY(-${distance * start}px)`
        html.removeEventListener('transitionend', fun)
        setTimeout(() => {
          html.style.transition = '0.3s'
        })
      }
      this[p.timer] = setInterval(() => {
        start++
        if (start == Math.ceil(this.datasource1.length / 2)) {
          html.addEventListener('transitionend', fun)
        }
        html.style.transform = `translateY(-${distance * start}px)`
      }, 1500)
    },



}
