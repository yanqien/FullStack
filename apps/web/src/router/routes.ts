import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/home/index.vue'

export default <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/loginRegister/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/index.vue'),
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/article/articleList/index.vue'),
  },
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/article/articleDetail/index.vue'),
  }
]
