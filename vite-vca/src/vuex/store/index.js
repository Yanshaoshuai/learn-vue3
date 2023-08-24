import {createStore} from 'vuex'
import TabbarModule from "./module/TabbarModule.js";
import CinemaModule from "./module/CinemaModule.js";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    //持久化到 localStorage插件
    plugins:[createPersistedState({
        reducer:(state)=>{
            return {
                isTabbarShow:state.TabbarModule.isTabbarShow
            }
        }
    })],
    modules: {
        TabbarModule,
        CinemaModule
    }
})
export default store