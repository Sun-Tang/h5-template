import request from '../utils/request'

export const login = (username: string, password: string) => {
  return request.post('/admin/login', {
    username,
    password,
  })
}

export const getInfo = () => {
  return request.post('/admin/getinfo')
}

export const logout = () => {
  return request.post('/admin/logout')
}
