import { createApp } from 'vue'
import App from './vue-router/views/App.vue'
import  router from './vue-router/router'

const app=createApp(App);
app.use(router)
app.mount('#app')
