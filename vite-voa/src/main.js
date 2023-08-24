import { createApp } from 'vue'
//import App from './App.vue'
import App from './vue-router/views/App.vue'
import  router from '../../vite-voa/src/vue-router/router'

const  app=createApp(App);
//全局自定义指令
//app.directive("custom",{
//    mounted(el){//钩子
//        el.style.background='yellow'
//    }
//})

app.use(router)
app.mount('#app');
