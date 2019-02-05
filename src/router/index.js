import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/test'
import Home from '../components/home'
import Tab from '../components/tab'
import List from '../components/list'
import Detail from '../components/detail'
import Login from '../components/login'
import Register from '../components/register'

Vue.use(Router)

export default new Router({
	mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
		  path: '/tab/:kind',
			component: Tab
		},
		{
			path: '/list',
			component: List
		},
		{
			path: '/detail/:id',
			component: Detail
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		}
  ]
})
