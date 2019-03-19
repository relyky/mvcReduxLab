import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'

class InputMirror extends Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {
        const { hello } = this.props
        return (
            <div className="container">
                <input name="hello"
                    value={hello}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        // 法1:
        const action = { type: Ks.ASSIGN_VALUE, name, value }
        this.props.dispatch(action)

        // 法2:
        this.props.dispatch(actions.assignValue(name, value))

        // 法3: --- 過度包裝，除非有 高度共用性
        this.props.handleValueChange(name, value)

        // 法4: *** 回歸最原生的方法，反而是綜合考量後的最佳解 
        this.props.dispatch({ type: Ks.ASSIGN_VALUE, name, value })

        //this.setState({
        //    [name]: value
        //})
    }

}

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    hello: state.helloInfo.hello
})

const targetReducer = 'helloReducer'
const mapDispatchToProps = (dispatch, ownProps) => ({    
    dispatch,
    handleValueChange: (name, value) => dispatch({ type: Ks.ASSIGN_VALUE, name, value, targetReducer })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputMirror);
