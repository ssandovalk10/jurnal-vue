import { createRouter, createWebHashHistory } from 'vue-router'

import daybookRouter from '@/modules/daybook/router'

const routes = [
    {
      path: '/daybook',
      ...daybookRouter
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
