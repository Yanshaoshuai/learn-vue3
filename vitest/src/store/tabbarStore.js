import {defineStore} from "pinia";
import {ref} from "vue";

//第一个参数时唯一的storeId
const useTabbarStore
    = defineStore("tabbar", () => {
    //ref包装定义的就是state
    const isTabbarShow = ref(true)
    const change = (value) => {
        isTabbarShow.value = value
    }
    return {
        isTabbarShow,
        change
    }
})
export default useTabbarStore