import {describe,test,expect,beforeAll} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import useTabbarStore from "../src/store/tabbarStore.js";
describe('pinia store', () => {
    let tabbarStore
    let cinemaStore
    beforeAll(async () => {
        //显式激活pinia
        setActivePinia(createPinia())
        tabbarStore=useTabbarStore();
        //依赖其他pinia文件 在pinia激活后动态导入
        cinemaStore=(await import('../src/store/cinemaStore.js')).default();
    })
    test('tabbarStore', () => {
        expect(tabbarStore.isTabbarShow).toBe(true)
        tabbarStore.change(false)
        expect(tabbarStore.isTabbarShow).toBe(false)
    })
    test("cinemaStore",async () => {
        expect(cinemaStore.cinemas.length).toBe(0)
        await cinemaStore.getCinemaList()
        expect(cinemaStore.cinemas.length).gt(0)
    })
})