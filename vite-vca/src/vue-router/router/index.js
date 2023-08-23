//路由配置
import {createRouter, createWebHashHistory} from 'vue-router'
import Films from "../views/Films.vue";
import Cinemas from "../views/Cinemas.vue";
import Center from "../views/Center.vue";
import NotFound from "../views/NotFound.vue";
import NowPlaying from "../views/films/NowPlaying.vue";
import CommingSoon from "../views/films/CommingSoon.vue";

const routes=[
    {
        path:"/films",
        name:"films",//命名路由
        alias:"/film",//别名
        component:Films,
        children:[//嵌套路由
            {
                //path:"/films/nowplaying",
                path:"nowplaying",//和上面等价不能加/
                component:NowPlaying
            },
            {
                path:"/films/commingsoon",
                component:CommingSoon
            },
            {
                path: "/films",
                redirect:"/films/nowplaying"
            }
        ]
    },
    {
        path:"/cinemas",
        component:Cinemas
    },
    {
        path:"/center",
        component:Center
    },
    //默认路径
    {
        path: "/",
        redirect:"/films"
        //redirect:{
        //    name:"films"
        //}
    },
    //NotFound
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]
const router=createRouter({
    //hash模式 #/user/list
    //history /user/list
    history:createWebHashHistory(),
    routes,
})

export default router