import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Admin from "@/views/admin.vue";
import index from  "@/views/index.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'index',
    component: index,

  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
 
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
