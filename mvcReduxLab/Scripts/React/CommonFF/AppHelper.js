import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import UIBlocker from 'react-ui-blocker'
import actions from './actions.js'

class AppHelper extends Component {
    constructor(props) {
        super(props)
        //console.log('AppHelper', {props})

        //const appInfo = {
        //    functionId: props.functionId,
        //    appTitle: props.appTitle,
        //    antiForgeryToken: props.antiForgeryToken,
        //    loginUserInfo: props.loginUserInfo,
        //    entryFormNo: props.entryFormNo,
        //    entryMode: props.entryMode
        //}

        this.props.setupAppInfo(props.appInfo);

        // 禁止初始模式
        if (!props.noInitFormMode) {
            this.funcSetupFormMode(props.appInfo);
        }
    }

    funcSetupFormMode(appInfo) {
        //console.log('AppHelper.funcSetupFormMode', {appInfo})

        //## 依 entryMode, entryFormNo 判斷執行模式
        if (appInfo.entryMode === 'INIT') {
            // 查詢模式
            this.props.setupFormMode({ form_no: '', form_mode: 'QUERY' })
        }
        else if (appInfo.entryMode === 'APPLY' && appInfo.entryFormNo !== '') {
            // 申請模式，來自草稿匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'APPLY' })
        }
        else if (appInfo.entryMode === 'REVIEW' && appInfo.entryFormNo !== '') {
            // 審查模式，來自收件匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'REVIEW' })
        }
        else if (appInfo.entryMode === 'REJECT' && appInfo.entryFormNo !== '') {
            // 公文核准模式，來自收件匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'REJECT' })
        }
        else if (appInfo.entryMode === 'REVIEWODP' && appInfo.entryFormNo !== '') {
            // 公文核准模式，來自收件匣
            this.props.setupFormMode({ form_no: appInfo.entryFormNo, form_mode: 'REVIEWODP' })
        }

        //else if (appInfo.entryMode === 'APPLY' && appInfo.entryFormNo === '') {
        //    // 申請模式，新申請
        //    this.setState({ f_FirstMound: true })
        //    this.props.handleNewApplyForm()
        //}
        //else {
        //    alert('網址格式錯誤！')
        //}
    }

    render() {
        return (
            <div>
                <UIBlocker theme="foldingCube" isVisible={this.props.blocking} message="Loading..." />
            </div>
        );
    }
}

AppHelper.propTypes = {
    noInitFormMode: PropTypes.bool
}

AppHelper.defaultProps = {
    noInitFormMode: false
}

const mapStateToProps = (state, ownProps) => {
    return {
        blocking: state.appInfo.blocking
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setupAppInfo: (appInfo) => {
            dispatch(actions.setupAppInfo(appInfo));
        },
        setupFormMode: (formAttrs, initValuse) => {
            dispatch(actions.setupFormMode(formAttrs, initValuse))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHelper);
