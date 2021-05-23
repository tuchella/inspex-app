import Vue from 'vue'
import VueRouter from 'vue-router'
import Explorer from '../views/Explorer.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    alias: '/lorenz',
    name: 'lorenz',
    component: Explorer,
    props: {
      color: "blue",
      fileUrlMapper: (slice) => 'https://files.inspex.dev/lz/' + slice.file + '.mp3',
    }
  },
  /*{
    path: '/overflow',
    name: 'OverflowExplorer',
    component: Explorer,
    props: {
      color: "red"
    }
  },*/
  {
    path: '/uri',
    name: 'uri',
    component: Explorer,
    props: {
      color: "yellow",
      fileUrlMapper: (slice) => 'https://files.inspex.dev/uri/uri-' + slice.id + '.mp3',
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
