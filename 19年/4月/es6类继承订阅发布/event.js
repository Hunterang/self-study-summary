


class Event {
  constructor() {
    this.handles = {

    }
  }
  on(type,handle) {
    if (!this.handles[type]) {
      this.handles[type] = []
    }
    if (!this.handles[type].includes(handle))  {
      this.handles[type].push(handle)
    }
  }

  off(type,handle) {
    if (handle === undefined) {
      this.handles[type] = []
    }else {
      this.handles[type] = this.handles[type].filter( f => {
        return f!= handle
      })
    }
  }
  trigger(type,...aeg) {
    this.handles[type].forEach(f => {
      f(...aeg)
    })
  }
  once(type, handle) {

  }
}
