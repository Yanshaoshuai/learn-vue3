import {createPinia} from "pinia";
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = createApp(App);
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
