import React from 'react'
import { connect } from 'react-redux'
import AppHelper from 'CommonFF/AppHelper.js'
import TitleWidget from 'Common/TitleWidget.js'
import FormViewAccount from './FormViewAccount.js'
import FormViewUser from './FormViewUser.js'
import actions, { Ks } from 'CommonFF/actions.js'
import apiClient from './apiClient.js'

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

    handleSaveFormData() {
        const { formData } = this.props
        console.log('handleSaveFormData', { formData })

        this.props.setBlocking(true)
        apiClient.SaveFormData(formData).then((resp) => {
            console.log('SaveFormData success', { resp })
            swal.fire('SaveFormData success', 'success')
        }).catch((xhr) => {
            console.log('SaveFormData fail!', { xhr })
            const err = xhr.response.data;
            swal.fire('SaveFormData fail!', err.errMsg, 'error')
        }).finally(() => {
            this.props.setBlocking(false)
        })
    }

    handleLoadFormData() {
        const name = this.props.formData.accountInfo.name
        console.log('handleLoadFormData', { name })

        this.props.setBlocking(true)
        const args = { name }
        apiClient.LoadFormData(args).then((resp) => {
            const formData = resp.data
            console.log('LoadFormData success', { formData })
            this.props.fillFormData(formData)
            swal.fire('LoadFormData success', 'success')
        }).catch((xhr) => {
            console.log('LoadFormData fail!', { xhr })
            const err = xhr.response.data;
            swal.fire('LoadFormData fail!', err.errMsg, 'error')
        }).finally(() => {
            this.props.setBlocking(false)
        })
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
    setBlocking: (flag) => {
        dispatch({ type: Ks.SET_BLOCKING, flag })
    },
    fillFormData: (formData) => {
        dispatch({ type: Ks.FILL_FORM_DATA, formData })
    }
})

//export default AppForm;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
