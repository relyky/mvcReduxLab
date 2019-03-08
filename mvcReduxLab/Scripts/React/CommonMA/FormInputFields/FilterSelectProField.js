import React, { Component } from "react"
import PropTypes from 'prop-types'
import { FormGroup, Label, FormText, FormFeedback } from 'reactstrap'
import { cuIsEmpty, cuIsExists } from 'Common/CommonUtilities.js'
import FilterSelectPro from 'Common/FilterSelectPro.js'

///＃ 應用範例
//<FilterSelectProField
//    label="縣市代碼"
//    name='areaCode'
//    dataUrl='/CommonData/LoadAreaCode'
//    dataArgs={undefined}
//    value={this.state.areaCode}
//    disabled={false}
//    note="Filter Select Pro Filed測試"
//    validMessage="有選取項目。"
//    invalidMessage="未選取項目。"
//    onChange={(name, item) => {
//        console.log('FilterSelectProField.onChange', name, item)
//        this.setState({
//            [name]: item ? item.value : ''
//        })
//    }}
//    onValidate={(name, item) => cuIsExists(item)}
///>

class FilterSelectProField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputStatus: {
                valid: false,
                invalid: false
            }
        }

        //this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFilterSelectChange = this.handleFilterSelectChange.bind(this)
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
        const { label, name, dataUrl, dataArgs, value, placeholder, note, validMessage, invalidMessage, labelKey, valueKey, readOnly, disabled, className } = this.props
        const { inputStatus } = this.state
        return (
            <FormGroup className={className}>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>

                {/*<Input>*/}
                <FilterSelectPro
                    name={name}
                    value={value || ''}
                    disabled={disabled}
                    readOnly={readOnly}
                    dataUrl={dataUrl}
                    dataArgs={dataArgs}
                    labelKey={labelKey}
                    valueKey={valueKey}
                    placeholder={placeholder}
                    onChange={this.handleFilterSelectChange.bind(this)}
                />

                {/*<FormFeedback >*/}
                <div className="invalid-feedback" style={inputStatus.invalid ? { display: 'block' } : null}>{invalidMessage}</div>
                {/*<FormFeedback valid>*/}
                <div className="valid-feedback" style={inputStatus.valid ? { display: 'block' } : null}>{validMessage}</div>
                <FormText>{note}</FormText>
            </FormGroup>
        )
    }

    // handleInputChange(e) 
    handleFilterSelectChange(name, item) {
        const { onChange, onValidate } = this.props

        if (typeof onChange === "function")
            onChange(name, item)

        if (typeof onValidate === "function") {
            const isValid = onValidate(name, item)
            console.log('handleFilterSelectChange.onValidate', { isValid })

            const inputStatus = {
                valid: isValid,
                invalid: !isValid
            }

            this.setState({ inputStatus })
        }
    }
}

FilterSelectProField.propTypes = {
    name: PropTypes.string,
    dataUrl: PropTypes.string.isRequired, // ex: '/CommonData/LoadNationCodeList'
    dataArgs: PropTypes.object,  // 查詢參數
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    note: PropTypes.string,
    validMessage: PropTypes.string,
    invalidMessage: PropTypes.string,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string, // 進階用法，應用於水平模式
    onValidate: PropTypes.func,
    onChange: PropTypes.func
}

FilterSelectProField.defaultProps = {
    //placeholder: '請選擇'
}

export default FilterSelectProField;