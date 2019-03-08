import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            num: 3        
        }

        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    componentDidMount() {
        this.setState({ count: 99 })
    }

    render() {
        return (
            <div className="container">
                <h2>§ Counter</h2>
                <p>Count: {this.state.count}</p>
                <p>Num: {this.state.num}</p>
                <button onClick={this.handleIncrement}>加１</button>
                <button onClick={this.handleDecrement}>減１</button>
                <br /><br />
                <input type="number" name="num" value={this.state.num} onChange={this.handleInputChange} />
                <button onClick={this.handleAdd}>加我</button>

                <hr />
            </div>
        )
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleValueChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handleIncrement(e) {
        // 取環境參數
        const { count } = this.state
        // To proceed
        this.setState({ count: count + 1 })
    }

    handleDecrement(e) {
        // 取環境參數
        const { count } = this.state
        // To proceed
        this.setState({ count: count - 1 })
    }

    handleAdd(e) {
        // 取環境參數
        const { count, num } = this.state
        console.log('handleAdd', { count, num })
        // To proceed
        this.setState({ count: count + Number(num) })
    }
}

export default Counter;
