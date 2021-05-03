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
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
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
    path: '/modifyUser',
    name: 'modifyUser',
    component: () =>
      import(/* webpackChunkName: "modifyUser" */ '../views/user/modifyUser/index.vue'),
  },
  {
    path: '/userAddress',
    name: 'userAddress',
    component: () =>
      import(/* webpackChunkName: "userAddress" */ '../views/user/userAddress/index.vue'),
  },
  // 商品
  {
    path: '/itemList',
    name: 'itemList',
    component: () =>
      import(/* webpackChunkName: "itemList" */ '../views/item/itemList/index.vue'),
  },
  {
    path: '/itemDetail',
    name: 'itemDetail',
    component: () =>
      import(/* webpackChunkName: "itemDetail" */ '../views/item/itemDetail/index.vue'),
  },
  // 订单
  {
    path: '/orderList',
    name: 'orderList',
    component: () =>
      import(/* webpackChunkName: "orderList" */ '../views/order/orderList/index.vue'),
  },
]
