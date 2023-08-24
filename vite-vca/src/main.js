import { createApp } from 'vue'
import App from './vuex/views/App.vue'
import  router from './vuex/router'
import store from './vuex/store'

const app=createApp(App);
app.use(router)//注册路由插件
app.use(store)//注册状态管理插件
app.mount('#app')
