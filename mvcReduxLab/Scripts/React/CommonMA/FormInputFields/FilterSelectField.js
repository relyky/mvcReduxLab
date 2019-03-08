import React, { Component } from "react"
import PropTypes from 'prop-types'
import { FormGroup, Label, FormText, FormFeedback } from 'reactstrap'
import { cuIsEmpty, cuIsExists } from 'Common/CommonUtilities.js'
import FilterSelect from 'Common/FilterSelect.js'

///＃ 應用範例
//<FilterSelectField
//    label="選我選我"
//    name='selectMe'
//    value={this.state.selectMe}
//    readOnly={false}
//    disabled={false}
//    note="Filter Select Filed測試"
//    validMessage="有選取項目。"
//    invalidMessage="未選取項目。"
//    options={[
//        { value: 'chocolate', label: 'Chocolate 巧克力' },
//        { value: 'strawberry', label: 'Strawberry 草莓' },
//        { value: 'vanilla', label: 'Vanilla 香草' }
//    ]}
//    onChange={(name, item) => {
//        console.log('FilterSelectField.onChange', name, item)
//        this.setState({
//            [name]: item ? item.value : ''
//        })
//    }}
//    onValidate={(name, item) => cuIsExists(item)}
///>

class FilterSelectField extends Component {
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
        const { label, name, options, value, placeholder, note, validMessage, invalidMessage, labelKey, valueKey, readOnly, disabled, className } = this.props
        const { inputStatus } = this.state
        return (
            <FormGroup className={className}>
                <Label hidden={cuIsEmpty(label)}>{label}</Label>

                {/*<Input>*/}
                <FilterSelect
                    name={name}
                    value={value || ''}
                    disabled={disabled}
                    readOnly={readOnly}
                    options={options}
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

FilterSelectField.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
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

FilterSelectField.defaultProps = {
    //placeholder: '請選擇'
}

export default FilterSelectField;