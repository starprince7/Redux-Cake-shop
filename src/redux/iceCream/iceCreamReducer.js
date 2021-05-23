import { BUY_ICECREAM } from './actionTypes'

const initState = {
    numOfIceCream: 30
}

const iceCreamReducer = (state = initState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            numOfIceCream: state.numOfIceCream - action.payload
        }
        default: return state
    }
}

export default iceCreamReducer;