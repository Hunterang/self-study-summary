import ElMenu from './menu'
import ElMenuItem from './ElMenuItem'

let GlobalUi = {
  install(Vue) {
    Vue.component('ElMenu', ElMenu)
    Vue.component('ElMenuItem', ElMenuItem)
  }
}
export default GlobalUi
