import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import erro from '@/components/erro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '*',
      name: '404',
      component: erro
    }
  ]
})
