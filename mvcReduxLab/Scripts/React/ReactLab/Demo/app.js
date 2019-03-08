import "babel-polyfill"
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TitleWidget from './widgets/TitleWidget.js'
import Counter from './Counter.js'
import InputMirror from './InputMirror.js'
import Lister from './Lister.js'
import RepoSearch from './RepoSearch.js'
import MyInput from './MyInput.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {
            showMyInput: true,
            showCounter: false,
            showInputMirror: false,
            showLister: false,
            showRepoSearch: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {
        const { showMyInput, showCounter, showInputMirror, showLister, showRepoSearch } = this.state
        return (
            <div>
                <TitleWidget appTitle={globalappinfo.appTitle} /> 
                <div className="container">
                    <label>勾選展示項目：</label>
                    <label><input type="checkbox" name="showMyInput" checked={showMyInput} onChange={this.handleInputChange} /> 展示最簡單的元件運轉機制</label>&nbsp;
                    <label><input type="checkbox" name="showCounter" checked={showCounter} onChange={this.handleInputChange} /> Counter</label>&nbsp;
                    <label><input type="checkbox" name="showInputMirror" checked={showInputMirror} onChange={this.handleInputChange} /> InputMirror</label>&nbsp;
                    <label><input type="checkbox" name="showLister" checked={showLister} onChange={this.handleInputChange} /> Lister</label>&nbsp;
                    <label><input type="checkbox" name="showRepoSearch" checked={showRepoSearch} onChange={this.handleInputChange} /> RepoSearch</label>&nbsp;
                </div>

                {showMyInput && <MyInput/>}

                {showCounter && <Counter />}

                {showInputMirror && <InputMirror />}

                {showLister && <Lister />}

                {showRepoSearch && <RepoSearch />}

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

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
