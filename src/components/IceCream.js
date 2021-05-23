import React, {useState} from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from '../redux/iceCream/action'

function IceCream({ iceCream, buyIceCream }) {
const [number, setNumber] = useState(null)

    return (
        <div>
            <h2>Buy Ice cream - {iceCream}</h2>
            <input
                type="text"
                value={number}
                placeholder="enter number of ice cream"
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => {
                // if Number Is empty there's
                // no need setting it empty again!
               number !== '' &&  buyIceCream(number)
               number !== '' && setNumber('')
            }} >buy icecream</button>
        </div>
    )
}

const mapStateToProp = (state, componentProp) => {
    return {
        iceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProp = (dispatch, componentProp) => {
    return {
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(IceCream)
