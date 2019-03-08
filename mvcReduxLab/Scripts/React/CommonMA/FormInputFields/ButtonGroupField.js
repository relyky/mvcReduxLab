import React, { Component } from "react"
import PropTypes from 'prop-types'
import { FormGroup, Label, FormText, FormFeedback, ButtonGroup, Button } from 'reactstrap'
import { cuIsEmpty } from 'Common/CommonUtilities.js'
import './ButtonGroupField.css'

///＃ 應用範例
//<ButtonGroupField {...formCtrl} label="興趣" name="interestList"
//    valueList={this.state.interestList}
//    note="註：此為參考用客製範本。"
//    validMessage="勾選項目符合規定。"
//    invalidMessage="勾選項目不符合規定！需有２項興趣以上。"
//    onValidate={(name, value) => Array.isArray(value) && value.length >= 2}
//    onChange={this.handleValueChange}
//    options={[
//        { value: 'A', label: '籃球' },
//        { value: 'B', label: '排球' },
//        { value: 'C', label: '羽球' },
//        { value: 'D', label: '棒球' }
//    ]}
///>

class ButtonGroupField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputStatus: {
                valid: false,
                invalid: false
            }
        }

        //this.handleValueChange = this.handleValueChange.bind(this)
        this.handleCheckboxBtnClick = this.handleCheckboxBtnClick.bind(this)
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
            <FormGroup>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>

                {/*<Input>*/}
                <div>
                    <ButtonGroup>
                        {options.map((item, index) =>
                            <Button key={index} outline color='primary'
                                onClick={() => this.handleCheckboxBtnClick(item.value)}
                                active={Array.isArray(valueList) && valueList.some((c) => c === item.value)}
                                disabled={disabled || readOnly} >
                                {item.label}
                            </Button>
                        )}
                    </ButtonGroup>
                </div>

                {/*<FormFeedback >*/}
                <div className="invalid-feedback" style={inputStatus.invalid ? { display: 'block' } : null}>{invalidMessage}</div>
                {/*<FormFeedback valid>*/}
                <div className="valid-feedback" style={inputStatus.valid ? { display: 'block' } : null}>{validMessage}</div>
                <FormText>{note}</FormText>
            </FormGroup>
        )
    }

    //handleValueChange(name, value)
    handleCheckboxBtnClick(selected) {
        const { name, valueList, onChange, onValidate } = this.props

        let newValueList = Array.isArray(valueList) ? valueList.slice() : []
        const index = newValueList.indexOf(selected)
        if (index < 0) {
            newValueList.push(selected)
        } else {
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

ButtonGroupField.propTypes = {
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

//ButtonGroupField.defaultProps = {
//    type: 'text' // text,password
//}

export default ButtonGroupField;