import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/long-polling',
    name: 'LongPolling',
    component: () => import('@/views/LongPolling.vue')
  },
  {
    path: '/event-source',
    name: 'EventSource',
    component: () => import('@/views/EventSource.vue')
  },
  {
    path: '/web-sockets',
    name: 'WebSockets',
    component: () => import('@/views/WebSockets.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
