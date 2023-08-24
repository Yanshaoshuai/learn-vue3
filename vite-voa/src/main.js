import { createApp } from 'vue'
//import App from './App.vue'
import App from './vuex/views/App.vue'
import  router from './vuex/router'
import store from './vuex/store'

const  app=createApp(App);
//全局自定义指令
//app.directive("custom",{
//    mounted(el){//钩子
//        el.style.background='yellow'
//    }
//})

app.use(router)//注册路由插件
app.use(store)//注册状态管理插件
app.mount('#app');
