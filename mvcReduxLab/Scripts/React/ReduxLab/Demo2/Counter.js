import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ks } from 'CommonFF/actions.js'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {
        const { countInfo, dispatch } = this.props
        return (
            <div className="container">
                <h2>§ Redux Counter</h2>
                <p>Count: {countInfo.count}</p>
                <p>Num: {countInfo.num}</p>
                <button onClick={() => dispatch({ type: 'INCREASE_COUNT' })}>加１</button>
                <button onClick={() => dispatch({ type: 'DECREASE_COUNT' })}>減１</button>
                <br /><br />
                <input type="number" name="num" value={countInfo.num} onChange={this.handleInputChange} />
                <button onClick={this.handleAdd}>加我</button>

                <hr />
            </div>
        )
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.props.handleValueChange(name, value)
        //this.setState({ [name]: value })
    }

    handleAdd(e) {
        const { countInfo } = this.props
        this.props.assignStateProps({
            count: countInfo.count + Number(countInfo.num)
        })
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => {
    return {
        countInfo: state.countInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const targetReducer = 'counterReducer'
    return {
        dispatch,
        handleValueChange: (name, value) => {
            dispatch({
                type: Ks.ASSIGN_VALUE,
                name,
                value,
                targetReducer
            })
        },
        assignStateProps: (properties) => {
            dispatch({
                type: Ks.ASSIGN_STATE_PROPS,
                properties,
                targetReducer
            })
        }
    }
}

//export default Counter;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
