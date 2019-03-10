import React from 'react'
import { connect } from 'react-redux'
import AppHelper from 'CommonFF/AppHelper.js'
import TitleWidget from './widgets/TitleWidget.js'
import Counter from './Counter.js'
import Lister from './Lister.js'

class AppForm extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {
            showCounter: false,
            showLister: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    render() {
        const { showCounter, showLister } = this.state
        //console.log('AppForm.render', { props: this.props })
        return (
            <div>
                <AppHelper appInfo={globalappinfo} noInitFormMode />
                <TitleWidget appTitle={globalappinfo.appTitle} /> 
                <div className="container">
                    <label>勾選展示項目：</label>
                    <label><input type="checkbox" name="showCounter" checked={showCounter} onChange={this.handleInputChange} /> Counter</label>&nbsp;
                    <label><input type="checkbox" name="showLister" checked={showLister} onChange={this.handleInputChange} /> Lister</label>&nbsp;
                </div>

                {showCounter && <Counter />}

                {showLister && <Lister />}

            </div>
        )
    }

    handleInputChange(e) {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

}

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    appInfo: state.appInfo,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
})

//export default AppForm;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
