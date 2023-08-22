import { createApp } from 'vue'
//import App from './App.vue'
import App from './inner-component/App.vue'

const  app=createApp(App);
//全局自定义指令
//app.directive("custom",{
//    mounted(el){//钩子
//        el.style.background='yellow'
//    }
//})
app.mount('#app');
