import React, { Component } from 'react'

class MyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        this.setState({ textValue: 'foo' })
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: 'yellowgreen' }}>
                <p>說明：展示最簡單的元件運轉機制。</p>
                <input type="text" name="textValue" value={this.state.textValue} onChange={this.handleInputChange} />
                <p>
                    <label>textValue:</label>&nbsp;{this.state.textValue}
                </p>
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
}

export default MyInput;
