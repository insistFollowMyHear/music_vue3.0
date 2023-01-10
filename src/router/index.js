import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend.vue')
const Singer = () => import('@/views/singer.vue')
const TopList = () => import('@/views/top-list.vue')
const Search = () => import('@/views/search.vue')

const routes = [{
  path: '/',
  redirect: '/recommend'
},{
  path: '/recommend',
  name: 'Recommend',
  component: Recommend
},{
  path: '/singer',
  name: 'Singer',
  component: Singer
},{
  path: '/top-list',
  name: 'TopList',
  component: TopList
},{
  path: '/search',
  name: 'Search',
  component: Search
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
