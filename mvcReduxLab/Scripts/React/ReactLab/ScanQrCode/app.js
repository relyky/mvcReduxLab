import "babel-polyfill"
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Instascan from 'instascan'

window.Instascan = require('instascan');

class App extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {
            content: null
        }

    }

    componentDidMount() {
        let scanner = new Instascan.Scanner({ video: document.getElementById('preview') })

        scanner.addListener('scan', function (content) {
            console.error(content)
        })

        Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
                scanner.start(cameras[0])
            } else {
                console.error('No cameras found.')
            }
        }).catch(function (e) {
            console.error(e)
        })
    }

    render() {
        return (
            <div>
                <h1>Scan QR Code</h1>

                <video id="preview"></video>

            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
