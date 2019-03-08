import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {
            hello: ''
        }
    }

    /// 官方建議初始化地點
    componentDidMount() {
        this.setState({ hello: 'Hi, I am React.'})
    }

    render() {
        return (
            <div>
                {this.state.hello}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
