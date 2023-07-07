import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { showFailToast } from 'vant'
import { useUserStore } from '~@/store/user'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API ?? '/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  const userStore = useUserStore()
  const { token } = storeToRefs(userStore)
  if (token)
    config.headers.token = token.value

  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data.data
}, (error) => {
  // 对响应错误做点什么

  showFailToast(error.response?.data.msg)
  return Promise.reject(error)
})

interface Data {
  [index: string]: unknown
}

interface Http {
  get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  patch: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  delete: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const http: Http = {
  get(url, data, config) {
    return instance.get(url, {
      params: data,
      ...config,
    })
  },
  post(url, data, config) {
    return instance.post(url, data, config)
  },
  put(url, data, config) {
    return instance.put(url, data, config)
  },
  patch(url, data, config) {
    return instance.patch(url, data, config)
  },
  delete(url, data, config) {
    return instance.delete(url, {
      data,
      ...config,
    })
  },
}

export default http
