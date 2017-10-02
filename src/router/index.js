import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/Recommend'
import Movie from '../components/movie/Movie'
import Cartoon from '../components/cartoon/Cartoon'
import Teleplay from '../components/teleplay/Teleplay'
import Variety from '../components/variety/Variety'
import Newsreel from '../components/newsreel/Newsreel'
// import App from '../App.vue'
import Search from '../components/search/Search'
import Video from '../components/video/Video'

Vue.use(Router)

const routes = [
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    children: [{path: '/recommend/video/:id', name: 'Video', component: Video}]
  },
  {path: '/cartoon', name: 'Cartoon', component: Cartoon},
  {path: '/movie', name: 'Movie', component: Movie},
  {path: '/teleplay', name: 'Teleplay', component: Teleplay},
  {path: '/variety', name: 'Variety', component: Variety},
  {path: '/newsreel', name: 'Newsreel', component: Newsreel},
  {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/recommend/video', name: 'Video', component: Video
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
