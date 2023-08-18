import { createApp } from 'vue'//导入vue模块createApp方法
import App from './App.vue'//导入单文件组件
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

createApp(App)//创建根组件
    //注册全局组件
    .component("Navbar",Navbar)
    .component("Sidebar",Sidebar)
    //挂载index.html的app标签
    .mount('#app')
