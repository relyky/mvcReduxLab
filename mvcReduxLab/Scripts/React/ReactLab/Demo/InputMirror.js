import React, { Component } from 'react'

class InputMirror extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '今天天氣真好'
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    render() {
        return (
            <div className="container">
                <h2>§ InputMirror</h2>

                <p>
                    <input name="value"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                </p>

                <p>
                    <label>鏡像１</label>
                    <input readOnly={true}
                        value={this.state.value} />
                </p>

                <p>
                    <label>鏡像２</label>
                    {this.state.value}
                </p>

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

}

export default InputMirror;
