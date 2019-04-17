import "babel-polyfill"
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QRCode from 'qrcode.react'
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class App extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {
            value: 'http://www.asiavista.com.tw/aaaaa/bbbbb/ccccc?ddddd=eeeee&fffff=ggggg/hhhhh/iiiii/jjjjj/kkkkk/lllll/mmmmm/nnnnn/ooooo/ppppp/qqqqq/rrrrr/sssss/ttttt/uuuuuu/vvvvv/wwwww/xxxxx/yyyyy/zzzz',
            includeMargin: false,
            level: 'L', // ('L' 'M' 'Q' 'H')
            size: 128,
            bgColor: '#FFFFFF',
            fgColor: '#000000',
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    /// 官方建議初始化地點
    componentDidMount() {
        this.setState({ hello: 'QR Code Lab'})
    }

    render() {
        return (
            <Container>
                <h2>QRCode練習</h2>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>value</Label>
                        <Col sm={10}>
                            <Input type="text" name="value" value={this.state.value} onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}></Label>
                        <Col xs={8} sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="includeMargin" value={this.state.includeMargin} onChange={this.handleInputChange} />&nbsp;
                                    includeMargin
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>level</Label>
                        <Col xs={8} sm={10}>
                            <Input type="select" name="level" value={this.state.level} onChange={this.handleInputChange}>
                                <option>L</option>
                                <option>M</option>
                                <option>Q</option>
                                <option>H</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>size</Label>
                        <Col xs={8} sm={10}>
                            <Input type="number" name="size" value={this.state.size} onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>bgColor</Label>
                        <Col xs={8} sm={10}>
                            <Input type="text" name="bgColor" value={this.state.bgColor} onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} sm={2}>fgColor</Label>
                        <Col xs={8} sm={10}>
                            <Input type="text" name="fgColor" value={this.state.fgColor} onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                </Form>

                <div style={{ border: '1px solid', width: 'fit-content', height: 'fit-content' }}>
                    <QRCode
                        value={this.state.value}
                        includeMargin={this.state.includeMargin}
                        level={this.state.level}
                        size={Number(this.state.size)}
                        bgColor={this.state.bgColor}
                        fgColor={this.state.fgColor}
                    />
                </div>

            </Container>
        );
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
