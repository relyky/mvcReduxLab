import React, { Component } from "react"
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import { cuIsEmpty } from 'Common/CommonUtilities.js'

///＃ 應用範例
//<Form>
//    <FormBlock subTitle="Caption">
//        <Row form>
//            <Col sm={6}>
//                <TextField type="password" label="密碼1" name="password"
//                    placeholder="請輸入密碼"
//                    note="註：密碼需６碼以上。"
//                    validMessage="密碼格式正確。"
//                    invalidMessage="密碼過短或易猜。"
//                    value={this.state.password}
//                    readOnly={false}
//                    disabled={false}
//                    plaintext={false}
//                    onValidate={(name, value) => (value.length > 6)}
//                    onChange={this.handleValueChange}
//                />
//            </Col>
//            <Col sm={6}>
//                <TextField label="Address" name="address"
//                    value={this.state.address}
//                    onChange={this.handleValueChange}
//                />
//            </Col>
//        </Row>
//    </FormBlock>
//</Form>

class TextField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputStatus: {
                valid: false,
                invalid: false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount() {
        const { name, value, onValidate } = this.props

        if (typeof onValidate === "function") {
            const isValid = onValidate(name, value)

            const inputStatus = {
                valid: isValid,
                invalid: !isValid
            }

            this.setState({ inputStatus })
        }
    }

    render() {
        const { label, type, name, value, placeholder, note, validMessage, invalidMessage, readOnly, disabled, plaintext, className } = this.props
        const { inputStatus } = this.state
        return (
            <FormGroup className={className}>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>
                <Input {...inputStatus}
                    type={type}
                    name={name}
                    value={value || ''}
                    placeholder={placeholder}
                    onChange={this.handleInputChange}
                    readOnly={readOnly}
                    disabled={disabled}
                    plaintext={plaintext}
                />
                <FormFeedback>{invalidMessage}</FormFeedback>
                <FormFeedback valid>{validMessage}</FormFeedback>
                <FormText>{note}</FormText>
            </FormGroup>
        )
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        const { onChange, onValidate } = this.props

        if (typeof onChange === "function")
            onChange(name, value)

        if (typeof onValidate === "function") {
            const isValid = onValidate(name, value)

            const inputStatus = {
                valid: isValid,
                invalid: !isValid
            }

            this.setState({ inputStatus})
        }
    }
}

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string, 
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    note: PropTypes.string,
    validMessage: PropTypes.string,
    invalidMessage: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    plaintext: PropTypes.bool, // 靜態文字
    className: PropTypes.string, // 進階用法，應用於水平模式
    onValidate: PropTypes.func,
    onChange: PropTypes.func
}

TextField.defaultProps = {
    type: 'text' // text,password
}

export default TextField;