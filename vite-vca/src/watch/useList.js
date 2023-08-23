import {ref, watch, watchEffect} from "vue";
import axios from "axios";


function useList() {
    const select = ref("yan")
    const list = ref([])
    //async 用同步代码写异步
    //watch(select, async (value) => {
    //    //`${value}` es6字符串模板
    //    var res = await axios.get(`http://localhost:3000/news?author=${value}`);
    //    list.value = res.data
    //},{immediate: true});

    //watchEffect 没有惰性 会自动监听其中用到的响应式参数 改变就会执行
    watchEffect(async () => {
        var res = await axios.get(`http://localhost:3000/news?author=${select.value}`);
        list.value = res.data
    });
    return {select,list}
}

export default useList