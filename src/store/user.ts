import { showSuccessToast } from 'vant'
import { getInfo, logout } from '@/api/manager'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>()
  const userInfo = ref<any>()

  const setUserInfo = (): void => {
    getInfo().then((res) => {
      showSuccessToast('登录成功')
      userInfo.value = res
    })
  }

  const setToken = (tokenValue: string) => {
    setUserInfo()
    token.value = tokenValue
  }

  // 必须加回调不然获取不到router变量
  const accountLogout = (fn: Function) => {
    logout().finally(() => {
      token.value = ''
      userInfo.value = ''
      fn()
      showSuccessToast('退出成功')
    })
  }

  return {
    token,
    userInfo,
    setToken,
    setUserInfo,
    accountLogout,
  }
}, {
  persist: {
    enabled: true,
    strategies: [
      { storage: sessionStorage, paths: ['token', 'userInfo'] },
    ],
  },
})
