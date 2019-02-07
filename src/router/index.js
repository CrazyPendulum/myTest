import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/test'
import Home from '../components/home'
import Tab from '../components/tab'
import Detail from '../components/detail'
import Login from '../components/login'
import Register from '../components/register'
import Category from '../components/category'
import Search from '../components/search'

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
		},
		{
			path: '/category/:id',
			component: Category
		},
		{
			path: '/search',
			component:Search
		}
  ]
})
