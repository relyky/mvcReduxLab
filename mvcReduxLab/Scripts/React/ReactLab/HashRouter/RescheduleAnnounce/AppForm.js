import React, { Component } from "react"
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'
//import apiClient from './apiClient.js'
import AppHelper from 'CommonFF/AppHelper.js'
import { cuIsAssignee, cuCheckRequiredIdentity, cuNotEmpty, cuIsExists } from 'Common/CommonUtilities.js'

import TitleWidget from 'CommonMA/TitleWidget.js'
import { Container, Row, Col } from 'reactstrap'

//import DataSearch from './DataSearch.js'
import DataLister from './DataLister.js'
import DataInfo from './DataInfo.js'

///## resource
const targetReducer = 'RescheduleAnnounceReducer';

class AppForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.handleValueChange = this.handleValueChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    componentWillMount() {
        ///!!! 先讓原型能跑再補到正確的碼
        const appInfo = globalappinfo; // 取環境參數
        if (appInfo.entryMode === 'INIT') {
            // 查詢模式
            this.props.dispatch({
                type: Ks.SETUP_FROM_MODE,
                form_mode: 'QUERY',
                targetReducer
            })
        }
    }

    render() {
        const { form_mode } = this.props

        return (
            <Container>
                <AppHelper appInfo={globalappinfo} noInitFormMode />
                <TitleWidget appTitle={globalappinfo.appTitle} />

                {form_mode === 'QUERY' &&
                    <DataLister />
                }
                {/*{form_mode === 'VIEW' && 
                    <DataInfo />
                }*/}

            </Container>
        )
    }

    handleValueChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handleToggle(name) {
        this.setState({
            [name]: !this.state[name]
        })
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
        formData: state.RescheduleAnnounceData,
        form_mode: state.RescheduleAnnounceData.form_mode,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        setBlocking: (flag) => {
            dispatch(actions.setBlocking(flag))
        },
        setupFormMode: (form_mode) => ({
            type: Ks.SETUP_FROM_MODE,
            form_mode,
            targetReducer
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppForm);
