import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageOne from '@/components/PageOne.vue'
import PageTwo from '@/components/PageTwo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pageone',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/pagetwo',
    name: 'PageTwo',
    component: PageTwo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
