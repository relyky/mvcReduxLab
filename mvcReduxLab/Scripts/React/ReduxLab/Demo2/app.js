import "babel-polyfill"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from './reducers/store.js'
import AppForm from './AppForm.js'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <AppForm />
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
