import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import '@/assets/styles/index.scss' // global css
import 'amfe-flexible/index' // 适配手机端

createApp(App).use(router).use(store).mount('#app')
