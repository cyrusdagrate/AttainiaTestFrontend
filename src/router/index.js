import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import UserTable from '@/components/UserTable'
import DetailTable from '@/components/DetailTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'UserTable',
      component: UserTable
    },
    {
      path: '/page2',
      name: 'DetailTable',
      component: DetailTable
    }
  ]
})
