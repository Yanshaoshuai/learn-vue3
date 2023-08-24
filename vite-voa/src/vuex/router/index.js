//路由配置
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Films from "../views/Films.vue";
//import Cinemas from "../views/Cinemas.vue";
import Center from "../views/Center.vue";
import NotFound from "../views/NotFound.vue";
import NowPlaying from "../views/films/NowPlaying.vue";
import CommingSoon from "../views/films/CommingSoon.vue";
import Detail from "../views/films/Detail.vue";
import Login from "../views/Login.vue";

const routes=[
    {
        path:"/login",
        name:'login',
        component:Login
    },
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
        path:"/detail/:filmId",
        name:'detail',
        component:Detail
    },
    //{//匹配?传参
    //    path:"/detail",
    //    name:'detail',
    //    component:Detail
    //},
    {
        path:"/cinemas",
        component:()=>import('../views/Cinemas.vue')//动态导入 懒加载
    },
    {
        path:"/center",
        component:Center,
        meta:{
            //需要验证标记
            requiredAuth:true
        }
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
    //history:createWebHashHistory(),
    //history /user/list  需要后端配合把不匹配静态资源时的请求重定向到index.html
    history:createWebHistory(),
    routes,
})

//全局拦截 前置钩子
//router.beforeEach((to,from,next) => {
//    let isAuthenticated=localStorage.getItem("token");
//    //未通过验证跳到登录
//    if(to.name!=='login' && !isAuthenticated &&to.meta.requiredAuth)
//        next({name:'login'})
//    else next()
//})

//后置钩子 跳转后拦截
//router.afterEach((to,from) => {
//
//})
export default router