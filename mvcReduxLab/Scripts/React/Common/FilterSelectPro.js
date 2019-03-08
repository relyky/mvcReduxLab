import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import axios from 'axios'

const customStyles = undefined
//const customStyles = {
//    option: (base, state) => {
//        //console.log('customStyles option', base, state)
//        return Object.assign({}, base, {
//            padding: '4px 12px',
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
class FilterSelectPro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codeList: []
        }
    }

    componentWillMount() {
        axios.post(this.props.dataUrl, this.props.dataArgs)
            .then((resp) => {
                const codeList = Array.isArray(resp.data) ? resp.data : []
                this.setState({ codeList: codeList })
            }).catch((xhr) => {
                console.error('FilterSelectPro componentWillMount', xhr)
            })
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state === nextState && this.props !== nextProps && nextProps['dataArgs']) {
            axios.post(this.props.dataUrl, nextProps['dataArgs'])
                .then((resp) => {
                    const codeList = Array.isArray(resp.data) ? resp.data : []
                    this.setState({ codeList: codeList })
                }).catch((xhr) => {
                    console.error('FilterSelectPro componentWillUpdate', xhr)
                })
        }  
    }

    // dispatching an action based on state change
    componentDidUpdate(nextProps, nextState) {
        //if (this.state === nextState && this.props !== nextProps) {
        //    console.info('componentDidUpdate dataArgs', this.props['dataArgs'], nextProps['dataArgs'])
        //}
    }

    render() {
        //const currentItem = this.state.codeList.find(x => x[this.props.valueKey] === this.props.value) ||''
        const currentItem = this.state.codeList.find(x => x[this.props.valueKey] === this.props.value) || ''
        return (
            <Select classNamePrefix='react-select'
                options={this.state.codeList}
                value={currentItem}
                styles={customStyles}
                placeholder={this.props.placeholder}
                onChange={(item) => this.props.onChange(this.props.name, Array.isArray(item) ? null : item)}
                isClearable={true}
                isSearchable={true}
                readOnly={this.props.readOnly}
                isDisabled={this.props.readOnly ? true : this.props.disabled}
                getOptionLabel={(item) => item[this.props.labelKey]}
                getOptionValue={(item) => item[this.props.valueKey]}
            />
        )
    }
}

FilterSelectPro.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    dataUrl: PropTypes.string.isRequired, // ex: '/CommonData/LoadNationCodeList'
    dataArgs: PropTypes.object,  // 查詢參數
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,    
    onChange: PropTypes.func
}

FilterSelectPro.defaultProps = {
    name: '',
    labelKey: 'label',
    valueKey: 'value',
    placeholder: '請選擇',
    disabled: false,
    readOnly: false,
}

export default FilterSelectPro;
