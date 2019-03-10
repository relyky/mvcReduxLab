import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ks } from 'CommonFF/actions.js'

const CounterF = (props) => {
    const { countInfo, dispatch } = props
    return (
        <div className="container">
            <h2>§ Redux Counter (stateless)</h2>
            <p>Count: {countInfo.count}</p>
            <p>Num: {countInfo.num}</p>
            <button onClick={() => dispatch({ type: 'INCREASE_COUNT' })}>加１</button>
            <button onClick={() => dispatch({ type: 'DECREASE_COUNT' })}>減１</button>
            <br /><br />
            <input type="number" name="num" value={countInfo.num} onChange={props.handleInputChange} />
            <button onClick={() => props.handleAdd(countInfo)}>加我</button>

            <hr />
        </div>
    )
}

const targetReducer = 'counterReducer'

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    countInfo: state.countInfo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    handleValueChange: (name, value) => {
        dispatch({ type: Ks.ASSIGN_VALUE, name, value, targetReducer })
    },
    assignStateProps: (properties) => {
        dispatch({ type: Ks.ASSIGN_STATE_PROPS, properties, targetReducer })
    },
    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        dispatch({ type: Ks.ASSIGN_VALUE, name, value, targetReducer })
    },
    handleAdd(countInfo) {
        const properties = {
            count: countInfo.count + Number(countInfo.num)
        }
        dispatch({ type: Ks.ASSIGN_STATE_PROPS, properties, targetReducer })
    }
})

//export default Counter;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterF);
