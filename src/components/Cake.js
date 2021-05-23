import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux/cake/actions'

function Cake({cake, buyCake}) {
    return (
        <div>
            <h1>Cake Number - { cake }</h1>
            <button onClick={buyCake}>buy cake</button>
        </div>
    )
}

const mapStateToProps = (state, componentProp) => {
    return {
        cake: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch, componentProp) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)
