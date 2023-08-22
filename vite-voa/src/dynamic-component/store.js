//发布/订阅
export default {
    datalist:[],
    subscribe(cb){
        this.datalist.push(cb)
    },
    publish(value){
        this.datalist.forEach(cb=>cb(value))
    }
}