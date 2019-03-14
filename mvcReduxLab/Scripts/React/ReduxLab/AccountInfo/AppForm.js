import React from 'react'
import { connect } from 'react-redux'
import AppHelper from 'CommonFF/AppHelper.js'
import TitleWidget from 'Common/TitleWidget.js'
import FormViewAccount from './FormViewAccount.js'
import FormViewUser from './FormViewUser.js'

class AppForm extends React.Component {
    constructor(props) {
        super(props)

        /// 注意：state 必需是物件
        this.state = {

        }

        this.handleSaveFormData = this.handleSaveFormData.bind(this)
        this.handleLoadFormData = this.handleLoadFormData.bind(this)
    }

    render() {
        const { showHello2, showCounter, showLister } = this.state
        return (
            <div>
                <AppHelper appInfo={globalappinfo} noInitFormMode />
                <TitleWidget appTitle={globalappinfo.appTitle} />

                <FormViewAccount />
                <FormViewUser />

                {/*<Commandbar />*/}
                <div className="container">
                    <button type="button" className="btn btn-primary btn-lg m-1" onClick={this.handleSaveFormData}>存檔</button>
                    <button type="button" className="btn btn-warning btn-lg m-1" onClick={this.handleLoadFormData}>載入</button>
                </div>

            </div>
        )
    }
}

// connect to Store
const mapStateToProps = (state, ownProps) => ({
    appInfo: state.appInfo,
    formData: {
        accountInfo: state.accountInfo,
        userInfo: state.userInfo
    }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,

})

//export default AppForm;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
