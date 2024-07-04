import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/HomePage.vue'
import MoviePage from './components/movies/MoviePage.vue'
import ActorsPage from './components/actors/ActorsPage.vue'
import ActorsDetail from './components/actors/ActorDetail.vue'

const routes = [
  { path: '/', 
    name: 'home',
    component: HomePage },

 { path: '/movie/:id', 
    name: 'movie',
    component: MoviePage },
    {
      path: '/actors',
      name:'actors',
      component: ActorsPage
    },
    {
      path: '/actor/:id',
      name:'actorsDetail',
      component: ActorsDetail
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
