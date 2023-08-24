import axios from "axios";

const CinemaModule = {
    namespaced:true,
    state() {
        return {
            cinemas: []
        };
    },
    mutations: {
        changeCinemaList(state, payload) {
            state.cinemas = payload
        }
    }, //同步+异步
    //会缓存数据
    actions: {
        async getCinemaList(store) {
            var res = await axios({
                url: 'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=8443558', headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16928101985697188218798081","bc":"310100"}',
                    "X-Host": "mall.film-ticket.cinema.list"
                }
            })
            //提交mutations
            store.commit('changeCinemaList', res.data.data.cinemas);
        }
    }, //store的计算属性
    getters: {
        filterByTypeCinemas(state) {
            //传参需要 返回一个函数
            return (type) => {
                return state.cinemas.filter(item => item.eTicketFlag === type)
            }
        }
    }
}

export default CinemaModule