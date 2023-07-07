import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import 'vant/lib/index.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/style/reset.min.css'

import 'nprogress/nprogress.css'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
