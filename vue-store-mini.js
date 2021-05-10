var $store = {
  state: {
    configurable: true
  }
} 

$store.state.get = function() {
  return this._vm._data.$$state
}

function Stores(state ={
  token: '',
  userInfo: {}
}) {
  this._vm  = new Vue({
    data: {
      $$state: state
    }
  })
}
Stores.prototype.reset = function() {
  this._vm._data.$$state = {token: '',
  userInfo: {}}
},
Stores.prototype.install = function(Vue) {
  Vue.mixin({
    beforeCreate: function() {
      let options = this.$options
      if(options.store) {
        this.$store = this.$options.store
      }  else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store;
      }
    }
  })
}
Object.defineProperties(Stores.prototype, $store)

let  token = window.sessionStorage.getItem('token')
let  userInfo = window.sessionStorage.getItem('userInfo')
userInfo = userInfo ? JSON.parse(userInfo) : {}


let stores = new Stores({
  token,
  userInfo
})

Vue.use(stores)
