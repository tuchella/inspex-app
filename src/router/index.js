import Vue from 'vue'
import VueRouter from 'vue-router'
import Explorer from '../views/Explorer.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    alias: '/lorenz',
    name: 'Explorer',
    component: Explorer,
    props: {
      color: "blue"
    }
  },
  {
    path: '/overflow',
    name: 'OverflowExplorer',
    component: Explorer,
    props: {
      color: "red"
    }
  },
  {
    path: '/uri',
    name: 'UriExplorer',
    component: Explorer,
    props: {
      color: "yellow"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
