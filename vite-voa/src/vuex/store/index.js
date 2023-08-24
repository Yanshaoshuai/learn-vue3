import {createStore} from 'vuex'
import TabbarModule from "./module/TabbarModule.js";
import CinemaModule from "./module/CinemaModule.js";

const store = createStore({
    modules: {
        TabbarModule,
        CinemaModule
    }
})
export default store