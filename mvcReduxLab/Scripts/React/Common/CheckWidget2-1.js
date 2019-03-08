import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CheckWidget2-1.css'

//const CheckWidget2 = ({name, checked, desc, onChange }) => (
//    <label>
//        <input type='checkbox' name={name} className='checkbox' checked={checked}
//            onChange={onChange} />
//        <span className='checkboxInput'></span>{desc}
//    </label>
//)

/// <summary>
/// CheckWidget的改版，增加對"refs"應用的支援。
/// html sample code:
///   <CheckWidget2 ref='inputCheck' desc='描述說明' />
/// 取值 samle code:
///   this.refs.inputCheck.stack.checked
///
/// § CheckWidget2-1
///   將獨立css拆分出來
/// </summary>
class CheckWidget2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: props.defaultChecked ? true : props.checked ? true : false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log('componentDidUpdate propsChanged', prevProps === this.props, 'stateChanged', prevState === this.state)
        if (prevProps !== this.props && prevState === this.state) {
            //# Props 已變化需連動觸發state異動
            //console.info('componentDidUpdate: ', this.state, this.props)
            if (this.props.checked !== undefined)
                this.setState({ checked: this.props.checked})
        }
    }

    handleChange(e) {
        this.setState({ checked: e.target.checked },
            () => { if (this.props.onChange) this.props.onChange(this.props.name, this.state.checked) })
    }

    render() {
        /* 備份
        <label>
            <input type='checkbox' name={this.props.name} className='checkbox' checked={this.state.checked}
                onChange={this.handleChange} disabled={this.props.disabled} />
            <span className='checkboxInput'></span>{this.props.desc}
        </label>*/
        return (
            <label className="checkboxContainer">
                <input type="checkbox" name={this.props.name}
                    checked={this.state.checked}
                    disabled={this.props.disabled}
                    onChange={this.handleChange} />
                <span className="checkmark"></span>{this.props.desc}
            </label>
        )
    }
}

CheckWidget2.defaultProps = {
    desc: '',
    disabled: false
}

CheckWidget2.propTypes = {
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    desc: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func // (name,value)=>
}

export default CheckWidget2;