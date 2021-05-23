import { BUY_CAKE } from './actionTypes'

const initState = {
    numOfCakes: 10
}

const cakeReducer = (state = initState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

export default cakeReducer;