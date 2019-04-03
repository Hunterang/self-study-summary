

function run (el) {
  // window.requestAnimationFrame(run)
    el.scrollLeft++
    console.log(el.scrollLeft);

    if (el.scrollLeft == 240) {
      clearTimeout(el.timer)
      return
    }
    el.timer = setTimeout(()=>{
      run(el)
    },100)
}
