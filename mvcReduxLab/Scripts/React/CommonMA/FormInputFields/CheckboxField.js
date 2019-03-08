import React, { Component } from "react"
import PropTypes from 'prop-types'
import { FormGroup, Label, FormText, FormFeedback } from 'reactstrap'
import CheckWidget2 from 'Common/CheckWidget2-1.js'
import { cuIsEmpty } from 'Common/CommonUtilities.js'

///＃ 應用範例
//<CheckboxField label="興趣" name="interestList"
//    note="註：此為參考用客製範本。"
//    validMessage="勾選項目符合規定。"
//    invalidMessage="勾選項目不符合規定！需有２項興趣以上。"
//    options={[
//        { value: 'A', label: '籃球' },
//        { value: 'B', label: '排球' },
//        { value: 'C', label: '羽球' },
//        { value: 'D', label: '棒球' }
//    ]}
//    valueList={this.state.interestList}
//    onValidate={(name, value) => Array.isArray(value) && value.length >= 2}
//    onChange={this.handleValueChange}
///>

class CheckboxesField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputStatus: {
                valid: false,
                invalid: false
            }
        }

        this.handleValueChange = this.handleValueChange.bind(this)
    }

    componentDidMount() {
        const { name, valueList, onValidate } = this.props

        if (typeof onValidate === "function") {
            const isValid = onValidate(name, valueList)

            const inputStatus = {
                valid: isValid,
                invalid: !isValid
            }

            this.setState({ inputStatus })
        }
    }

    render() {
        const { label, valueList, options, validMessage, invalidMessage, note, readOnly, disabled, className } = this.props
        const { inputStatus } = this.state
        return (
            <FormGroup className={className}>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>
                {/*<Input>*/}
                <div>
                    {options.map((item, index) =>
                        <CheckWidget2 key={index} desc={item.label} name={item.value}
                            checked={Array.isArray(valueList) && valueList.some((c) => c === item.value)}
                            disabled={disabled || readOnly}
                            onChange={this.handleValueChange}
                        />
                    )}
                </div>
                {/*<FormFeedback >*/}
                <div className="invalid-feedback" style={inputStatus.invalid ? { display: 'block' } : null}>{invalidMessage}</div>
                {/*<FormFeedback valid>*/}
                <div className="valid-feedback" style={inputStatus.valid ? { display: 'block' } : null}>{validMessage}</div>
                <FormText>{note}</FormText>
            </FormGroup>
        )
    }

    //handleValueChange(name, value) {
    handleValueChange(value, checked) {
        const { name, valueList, onChange, onValidate } = this.props

        let newValueList = Array.isArray(valueList) ? valueList.slice() : []
        if (checked) {
            newValueList.push(value)
        } else {
            const index = newValueList.findIndex((c) => c === value)
            if (index > -1)
                newValueList.splice(index, 1)
        }

        if (typeof onChange === "function")
            onChange(name, newValueList)

        if (typeof onValidate === "function") {
            const isValid = onValidate(name, newValueList)

            const inputStatus = {
                valid: isValid,
                invalid: !isValid
            }

            this.setState({ inputStatus })
        }
    }
}

CheckboxesField.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    valueList: PropTypes.array,
    label: PropTypes.string,
    note: PropTypes.string,
    validMessage: PropTypes.string,
    invalidMessage: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string, // 進階用法，應用於水平模式
    onValidate: PropTypes.func,
    onChange: PropTypes.func,
}

//CheckboxesField.defaultProps = {
//    type: 'text' // text,password
//}

export default CheckboxesField;