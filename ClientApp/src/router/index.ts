import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueBodyClass from 'vue-body-class'

import Admin from '@/views/admin.vue'
import index from '@/views/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'index',
    component: index
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { bodyClass: 'dashboard' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
const vueBodyClass = new VueBodyClass(routes)
router.beforeEach((to, from, next) => {
  vueBodyClass.guard(to, next)
})
export default router
