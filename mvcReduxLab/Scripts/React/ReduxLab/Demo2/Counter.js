import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'

// 環境參數
const targetReducer = 'counterReducer'

//-----------------------------------------------------------------------------
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
        console.log('handleInputChange')

        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        //# dispatch(action) 二種方法
        this.props.dispatch(actions.assignValue(name, value, targetReducer))
        //this.props.dispatch({ type: Ks.ASSIGN_VALUE, name, value, targetReducer })
    }

    handleAdd(e) {
        console.log('handleAdd')
        const { countInfo } = this.props

        const properties = { count: countInfo.count + Number(countInfo.num) }

        //# dispatch(action) 二種方法
        //this.props.dispatch(actions.assignStateProps(properties, targetReducer))
        this.props.dispatch({ type: Ks.ASSIGN_STATE_PROPS, properties, targetReducer })
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => {
    return {
        countInfo: state.countInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
    }
}

//export default Counter;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
