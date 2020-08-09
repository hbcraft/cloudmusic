import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/Main.vue'),
    redirect: {
      name: 'Discovery'
    },
    children: [
      {
        path: '/discovery',
        name: 'Discovery',
        component: () => import(/* webpackChunkName: "discovery" */ '@/components/discovery.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.onReady(() => {
  store.commit('pushHistory', (router as any).history.current.name)
})

export default router
