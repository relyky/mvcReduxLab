import React, { Component } from "react"
import PropTypes from 'prop-types'
import { RadioButton, RadioGroup } from '@trendmicro/react-radio'
import { FormGroup, Label, FormText, FormFeedback } from 'reactstrap'
import { cuIsEmpty } from 'Common/CommonUtilities.js'

///＃ 應用範例
//<RadioField label="姓別" name="gender"
//    note="註：此為參考用客製範本。"
//    validMessage="選取項目符合規定。"
//    invalidMessage="未選取項目。"
//    options={[
//        { value: 'M', label: '男性' },
//        { value: 'F', label: '女性' },
//        { value: 'X', label: '第三性' }
//    ]}
//    value={this.state.gender}
//    onValidate={(name, value) => cuNotEmpty(value)}
//    onChange={this.handleValueChange}
///>

class RadioField extends Component {
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
        const { label, name, options, value, validMessage, invalidMessage, note, readOnly, disabled, className } = this.props
        const { inputStatus } = this.state
        return (
            <FormGroup className={className}>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>
                {/*<Input>*/}
                <div>
                    <RadioGroup value={value} onChange={(newValue) => this.handleValueChange(name, newValue)} disabled={disabled || readOnly}>
                        {options.map((item, index) =>
                            <RadioButton key={index} label={item.label} value={item.value} />
                        )}
                    </RadioGroup>
                </div>
                {/*<FormFeedback >*/}
                <div className="invalid-feedback" style={inputStatus.invalid ? { display: 'block' } : null}>{invalidMessage}</div>
                {/*<FormFeedback valid>*/}
                <div className="valid-feedback" style={inputStatus.valid ? { display: 'block' } : null}>{validMessage}</div>
                <FormText>{note}</FormText>
            </FormGroup>
        )
    }

    handleValueChange(name, value) {
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

RadioField.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    note: PropTypes.string,
    validMessage: PropTypes.string,
    invalidMessage: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string, // 進階用法，應用於水平模式
    onValidate: PropTypes.func,
    onChange: PropTypes.func
}

//RadioField.defaultProps = {
//    type: 'text' // text,password
//}

export default RadioField;