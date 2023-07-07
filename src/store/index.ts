import { createPinia } from 'pinia'
// 引入持久化插件
import piniaPluginpersist from 'pinia-plugin-persist'

const store = createPinia()

// 使用该插件
store.use(piniaPluginpersist)

export default store
