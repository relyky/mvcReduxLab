import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const customStyles = undefined
//const customStyles = {
//    option: (base, state) => {
//        //console.log('customStyles option', base, state)
//        return Object.assign({}, base, {
//            padding:'4px 12px',
//            textAlign: 'left'
//        })
//    },
//    control: (base, state) => {
//        //console.log('customStyles control', base, state)
//        //console.log('isDisabled', state.isDisabled, 'readOnly', state.selectProps.readOnly)        
//        const backgroundColor = state.selectProps.readOnly ? '#e9f0f5' : state.isDisabled ? '#ddd' : '#fff'
//        return Object.assign({}, base, {
//            height: 30,
//            minHeight: 'unset',
//            backgroundColor: backgroundColor, //'#fff',
//        })
//    },
//    singleValue : (base, state) => {
//        //console.log('customStyles singleValue', base, state)
//        const color = state.selectProps.readOnly ? '#64abe1' : 'unset';
//        return Object.assign({}, base, {
//            color: color,
//        })
//    },
//    valueContainer: (base, state) => {
//        return Object.assign({}, base, {
//            marginTop: -6
//        })
//    },
//    indicatorsContainer: (base, state) => {
//        return Object.assign({}, base, {
//            marginTop: -6
//        })
//    },
//    indicatorSeparator: (base, state) => {
//        return Object.assign({}, base, {
//            marginTop: 6
//        })
//    }
//}

/// 過濾選取𠾖
const FilterSelect = ({ options, name, value, labelKey, valueKey, placeholder, disabled, readOnly, onChange }) => {
    let currentItem = options.find(x => x[valueKey] === value)

    return (
        <Select classNamePrefix='react-select'
            options={options}
            value={currentItem}
            styles={customStyles}
            placeholder={placeholder}
            onChange={(item) => onChange(name, Array.isArray(item) ? null : item)}
            readOnly={readOnly}
            isDisabled={readOnly ? true : disabled}
            isClearable={true}
            isSearchable={true}
            getOptionLabel={(item) => item[labelKey]}
            getOptionValue={(item) => item[valueKey]}
        />
    )
}

FilterSelect.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    options: PropTypes.array.isRequired, // ex: [{ value: 'chocolate', label: 'Chocolate' }]
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
}

FilterSelect.defaultProps = {
    name: '',
    labelKey: 'label',
    valueKey: 'value',
    placeholder: '請選擇',
    disabled: false,
    readOnly: false,
}

export default FilterSelect;
