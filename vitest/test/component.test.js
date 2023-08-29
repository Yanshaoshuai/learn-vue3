import Child from "../src/components/Child.vue";
import Counter from '../src/components/Counter.vue'
import {describe, test, expect} from "vitest";
import {fireEvent, render, getByText} from "@testing-library/vue";


describe('component', () => {

    test('Counter', async () => {
        const {getByText} = render(Counter)
        getByText('0')//隐式测试
        const button = getByText("add")
        await fireEvent.click(button)
        getByText('1')
    })

    test("Child", async () => {
        const {getByText} = render(Child, {
            props: {
                title: 'yan'
            }
        })
        getByText('yan')
    })
})