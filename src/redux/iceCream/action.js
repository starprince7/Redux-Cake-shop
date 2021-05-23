import { BUY_ICECREAM } from './actionTypes'

export const buyIceCream = (number) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}