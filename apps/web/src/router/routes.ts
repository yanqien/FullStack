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
    component: () => import(/* webpackChunkName: "login" */ '../views/loginRegister/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue'),
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () =>
      import(/* webpackChunkName: "userCenter" */ '../views/user/userCenter/index.vue'),
  },
  {
    path: '/userAddress',
    name: 'userAddress',
    component: () =>
      import(/* webpackChunkName: "userAddress" */ '../views/user/userAddress/index.vue'),
  },
]
