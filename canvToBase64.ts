const ctb = {
    canvasToBase64() {
        let cavs = document.querySelectorAll('canvas')
        cavs.forEach( v => {
  
          let width = this.getStyle(v, 'width')
          let height =this.getStyle(v, 'height')
  
          let base64 = v.toDataURL('image/png')
          let img = this.createImg(base64)
          img.setAttribute('width',width)
          img.setAttribute('height',height)
  
          this.replaceNode(v, img)
  
        })
  
      },
      replaceNode(el:HTMLElement, img:HTMLElement) {
        let parent =  el.parentNode
        if(!parent) return 
        parent.removeChild(el)
        parent.appendChild(img)
      },
      createImg(src: string) {
        let img = new Image()
        img.src =src
        return img
      },
      getStyle(el:Element, attr:any) {
        if(window.getComputedStyle as any) {
          return getComputedStyle(el, null)[attr]
        }
        return (el as any).currentStyle[attr]
      },
}

export default ctb