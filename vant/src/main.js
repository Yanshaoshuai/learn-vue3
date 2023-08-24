import { createApp } from 'vue'
import App from './views/App.vue'
import {createPinia} from "pinia";
import router from './router'

let app = createApp(App);
app.use(createPinia())
app.use(router)
app.mount('#app')