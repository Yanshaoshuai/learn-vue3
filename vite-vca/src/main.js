import {createApp} from 'vue'
import App from './pinia/views/App.vue'
import router from './pinia/router'
import {createPinia} from "pinia";

const pinia = createPinia();
const app = createApp(App);
app.use(router)//注册路由插件
app.use(pinia)//注册状态管理插件
app.mount('#app')
