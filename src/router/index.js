import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MovieList from '@/views/container/MovieList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MovieList,
    },
    {
      path: '/movies',
      name: 'Movie列表',
      component: MovieList
    }
  ]
})
