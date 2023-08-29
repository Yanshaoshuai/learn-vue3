import {defineStore} from "pinia";
import {ref} from "vue";

const useNewsStore
    = defineStore("news", () => {
    //ref包装定义的就是state
    const list = ref([])
    const add = (value) => {
        list.value.push({...value})
    }
    return {
        list,
        add,
    }
})
export default useNewsStore