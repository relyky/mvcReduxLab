import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppForm from './AppForm.js'
import store from './reducers/store.js'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <AppForm />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
