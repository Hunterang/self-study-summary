
import self from './module/self.js'
import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    self
  }
})

export default store
