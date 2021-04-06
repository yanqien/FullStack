import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/home/index.vue'

export default <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/home',
    component: Home,
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
    path: '/userCenter',
    name: 'userCenter',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/user/userCenter/index.vue'),
  },
  {
    path: '/userA',
    name: 'articleDetail',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/article/articleDetail/index.vue'),
  }
]
