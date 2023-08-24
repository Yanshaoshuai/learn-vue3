import {defineStore} from "pinia";

//第一个参数时唯一的storeId
const useTabbarStore=defineStore("tabbar",{
    state:()=>{
        return {
            isTabbarShow:true
        }
    },
    actions:{
        change(value){
            this.isTabbarShow=value
        }
    }
})

export default useTabbarStore