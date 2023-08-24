import {defineStore} from "pinia";
import axios from "axios";

//第一个参数时唯一的storeId
const useCinemaStore = defineStore("cinema", {
    state: () => {
        return {
            cinemas: []
        }
    },
    actions: {
        async getCinemaList() {
            let res = await axios({
                url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=8443558', headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081","bc":"310100"}',
                    "X-Host": "mall.film-ticket.cinema.list"
                }
            })
            this.cinemas = res.data.data.cinemas;
        }
    },
    getters: {
        filterByTypeCinemas(state) {
            //传参需要 返回一个函数
            return (type) => {
                return state.cinemas.filter(item => item.eTicketFlag === type)
            }
        }
    }
})

export default useCinemaStore