import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('~/pages/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/pages/login/index.vue'),
    meta: {
      title: '登录页',
    },
  },
  {
    path: '/originality',
    name: 'originality',
    component: () => import('~/pages/originality/index.vue'),
    meta: {
      title: '原创',
      keepAlive: true,
    },
  },
  {
    path: '/fine',
    name: 'fine',
    component: () => import('~/pages/fine/index.vue'),
    meta: {
      title: '精选',
      keepAlive: true,
    },
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('~/pages/game/index.vue'),
    meta: {
      title: '游戏',
      keepAlive: true,
    },
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('~/pages/my/index.vue'),
    meta: {
      title: '游戏',
      keepAlive: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('~/pages/404.vue'),
  },
]

export default staticRoutes
