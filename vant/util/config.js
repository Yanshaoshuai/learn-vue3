import axios from "axios";
import {closeToast, showLoadingToast} from "vant";

//配置axios拦截器
axios.interceptors.request.use(function (config){
    //请求时显示加载框
    showLoadingToast({
        message:"加载中...",
        //禁止背景点击
        forbidClick:true
    })
    return config;
},function (error){
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    //关闭加载框
    closeToast();
    return response;
}, function (error) {
    //关闭加载框
    closeToast();
    return Promise.reject(error);
});