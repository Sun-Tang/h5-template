import { createRouter, createWebHistory } from 'vue-router'
import nprogress from 'nprogress'
import { showFailToast } from 'vant'
import staticRoutes from './static-routes'
import { useUserStore } from '~@/store/user'

const router = createRouter({
  routes: [
    ...staticRoutes,
  ],
  history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const { token } = storeToRefs(userStore)

  // 显示loading
  nprogress.start()

  // 没有登录，强制跳转回登录页
  if (!token.value && to.path !== '/login') {
    showFailToast('请先登录')
    return next({ path: '/login' })
  }

  // 防止重复登录
  if (token.value && to.path === '/login') {
    showFailToast('请勿重复登录')
    return next({ path: from.path ? from.path : '/' })
  }

  // 设置页面的标题
  const title = `${to.meta.title ? to.meta.title : ''}-后台管理`
  document.title = title

  next()
})

// 全局后置守卫
router.afterEach(() => nprogress.done())

export default router
