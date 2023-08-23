import {computed, ref} from "vue";

/**
 * 自定义hooks 一般use开头
 */
function useSearch(datalist){
    const mytext=ref("")
    const computedList = computed(()=>{
        return datalist.value.filter(item=>item.content.includes(mytext.value))
    })
    return {mytext,computedList}
}

export default useSearch