import { createApp } from 'vue'
import App from './views/App.vue'
import {createPinia} from "pinia";
import router from './router'
import {Button} from "vant";
import 'vant/lib/index.css'

//加载配置js
import '../util/config'

let app = createApp(App);
//全局注册
//app.use(Button)
app.use(createPinia())
app.use(router)
app.mount('#app')
