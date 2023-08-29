//路由配置
import {createRouter, createWebHistory} from 'vue-router'
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import AddNews from "../views/AddNews.vue";
import NewsList from "../views/NewsList.vue";


const routes=[
    {
        path:"/home",
        component: Home
    },
    {
        path: "/",
        redirect:"/home"
    },
    {
      path:"/news/addNews",
      component: AddNews
    },
    {
      path:"/news/newsList",
      component: NewsList
    },
    //NotFound
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router