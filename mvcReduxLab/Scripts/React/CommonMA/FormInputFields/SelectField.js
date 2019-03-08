import React, { Component } from "react"
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import { cuIsEmpty } from 'Common/CommonUtilities.js'

///＃ 應用範例
//<SelectField {...formCtrl} label="受理單位" name="recUnit"
//    value={this.state.recUnit}
//    placeholder="請選擇"
//    note="註：此為參考用客製範本。"
//    validMessage="選取項目符合規定。"
//    invalidMessage="未選取項目。"
//    onValidate={(name, value) => cuNotEmpty(value)}
//    onChange={this.handleValueChange}
//    options={[
//        { value: 'KEL', label: '北部航務中心' },
//        { value: 'TPE', label: '北部航務中心(臺北)' },
//        { value: 'SUO', label: '北部航務中心(蘇澳)' },
//        { value: 'TXG', label: '中部航務中心' },
//        { value: 'KHH', label: '南部航務中心' },
//        { value: 'KHH', label: '東部航務中心' },
//    ]}
///>

class SelectField extends Component {
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
        //const props = this.props
        const { label, name, options, value, placeholder, note, validMessage, invalidMessage, readOnly, disabled, className } = this.props
        const { inputStatus } = this.state
        return (
            <FormGroup className={className}>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>

                <Input {...inputStatus}
                    type="select"
                    name={name}
                    value={value || ''}
                    onChange={this.handleInputChange}
                    readOnly={readOnly}
                    disabled={disabled}
                >
                    <option value='' hidden>{placeholder}</option>
                    {options.map((item, index) =>
                        <option key={index} value={item.value}>{item.label}</option>
                    )}
                </Input>

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

            this.setState({ inputStatus })
        }
    }
}

SelectField.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    note: PropTypes.string,
    validMessage: PropTypes.string,
    invalidMessage: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string, // 進階用法，應用於水平模式
    onValidate: PropTypes.func,
    onChange: PropTypes.func
}

SelectField.defaultProps = {
    type: 'text' // text,password
}

export default SelectField;