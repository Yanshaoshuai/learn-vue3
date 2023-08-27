import {defineStore} from "pinia";
import axios from "axios";
import {computed, ref} from "vue";
import useCityStore from "./cityStore.js";
const cityStore=useCityStore();
//第一个参数时唯一的storeId
const useCinemaStore = defineStore("cinema", () => {
    const cinemas = ref([])
    const getCinemaList = async () => {
        let res = await axios({
            url: `https://m.maizuo.com/gateway?cityId=${cityStore.cityId}&ticketFlag=1&k=8443558`, headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081","bc":"310100"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        })
        cinemas.value = res.data.data.cinemas;
    }
    const clearCinemaList=()=>{
        cinemas.value=[];
    }
    const filterByTypeCinemas=computed(()=>{
        //传参需要 返回一个函数
        return (type) => {
            return cinemas.value.filter(item => item.eTicketFlag === type)
        }
    })
    return {
        cinemas,
        getCinemaList,
        clearCinemaList,
        filterByTypeCinemas
    }
})

export default useCinemaStore