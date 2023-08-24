import {CHANGE_TABBAR} from "../type.js";

const TabbarModule = {
    namespaced:true,//开启命名空间
    //状态存在内存中
    state() {
        return {
            isTabbarShow: true,
        }
    },
    //唯一修改状态的位置 同步 devtool可以监控到
    mutations: {
        [CHANGE_TABBAR](state, payload) {
            state.isTabbarShow = payload
        }
    }
}

export default TabbarModule