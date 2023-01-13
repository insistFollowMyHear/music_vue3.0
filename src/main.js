import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'

import '@/assets/scss/index.scss'

// 自定义指令 -- 图片懒加载 -- .use(imgLazyPlugin)
// import imgLazyPlugin from './hooks/userImgLazy'

createApp(App).use(lazyPlugin, {
  loading: require('@/assets/images/logo.png'),
  error: require('@/assets/images/logo.png')
}).use(store).use(router).directive('loading', loadingDirective).mount('#app')
