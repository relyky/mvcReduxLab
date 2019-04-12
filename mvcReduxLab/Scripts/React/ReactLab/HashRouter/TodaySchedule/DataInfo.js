import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { Table, FormGroup, Button } from 'reactstrap'
import DataInfoView1 from './widgets/DataInfoView1.js'
import DataInfoView2 from './widgets/DataInfoView2.js'

const targetReducer = 'TodayScheduleReducer';

class DataInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 'tab1'
        }

        this.toggle = this.toggle.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
    }

    render() {
        const { queryType } = this.props
        const { activeTab } = this.state
        const { dataInfo } = this.props
        //
        const { itemList } = this.props.dataInfo.itemList
        return (
            <div>
                <div> {/* className="kym-nav-scroll" --- 先保留不用*/}
                    <Nav pills horizontal="sm-center">
                        <NavItem>
                            <NavLink active={activeTab === "tab1"} onClick={() => { this.toggle('tab1'); }}>
                                航班明細
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={activeTab === "tab2"} onClick={() => { this.toggle('tab2'); }}>
                                航線時刻表
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <p className="mt-2">
                    簽證編號：{`東港鹽埔漁港小琉球大福漁港航線(欣泰)`}
                </p>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="tab1">
                        <DataInfoView1 dataInfo={dataInfo} />
                    </TabPane>
                    <TabPane tabId="tab2">
                        <DataInfoView2 dataInfo={dataInfo} />
                    </TabPane>
                </TabContent>

                <FormGroup className="text-right text-sm-center">
                    <Button color="secondary m-1" onClick={this.handleGoBack}>回上一頁</Button>
                    <Button color="secondary m-1">加入最愛</Button>
                </FormGroup>
            </div>
        )
    }

    toggle(tabId) {
        if (this.state.activeTab !== tabId) {
            this.setState({
                activeTab: tabId
            })
        }
    }

    handleGoBack() {
        const queryType = this.props.queryType
        console.log("DataInfo queryType", queryType)
        this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST', queryType: queryType, targetReducer })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
        dataInfo: state.TodayScheduleData.dataInfo,
        itemList: state.TodayScheduleData.dataInfo.itemList,
        queryType: state.TodayScheduleData.queryType
        //form_mode: state.formData.form_mode,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        setBlocking: (flag) => {
            dispatch(actions.setBlocking(flag))
        },
        setupFormMode: (form_mode, queryType) => {
            dispatch({ type: Ks.SETUP_FROM_MODE, form_mode, queryType, targetReducer })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataInfo);
