
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/SearchView.vue')
    },
    {
      path: '/movie/:id',
      name: 'MovieView',
      props: true,
      component: () => import('./views/MovieView.vue')
    }
  ]
})