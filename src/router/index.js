import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Main from '@/page/mian'
import Contents from '@/page/lookall/content.vue'
import Map from '@/page/lookall/map.vue'
import CptManege from '@/page/lookall/computManege.vue'
import VedioManage from '@/page/lookall/vedioManage.vue'
import PersonManege from '@/page/lookall/personManege.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'contents',
          name: 'contents',
          component: Contents
        },
        {
          path: 'map',
          name: 'map',
          component: Map
        },
        {
          path: 'computManege',
          name: 'computManege',
          component: CptManege
        },
        {
          path: 'vedioManage',
          name: 'vedioManage',
          component: VedioManage
        },
        {
          path: 'personManege',
          name: 'personManege',
          component: VedioManage
        }
      ]
    }
  ]
})
