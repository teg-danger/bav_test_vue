import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
router.beforeEach(function (to, from, next) {
  const currentUser = store.getters.currentUser
  if ((to.path === '/login' || to.path === '/register') && currentUser != null) {
    next('/')
  } else {
    next()
  }
})
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
