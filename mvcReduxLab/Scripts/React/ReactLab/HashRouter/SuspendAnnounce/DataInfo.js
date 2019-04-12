import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { Table, FormGroup, Button } from 'reactstrap'
import DataInfoView1 from './widgets/DataInfoView1.js'
import DataInfoView2 from './widgets/DataInfoView2.js'
import DataInfoView3 from './widgets/DataInfoView3.js'
import DataInfoView4 from './widgets/DataInfoView4.js'
import DataInfoView5 from './widgets/DataInfoView5.js'
import DataInfoView6 from './widgets/DataInfoView6.js'

const targetReducer = 'RescheduleAnnounceReducer';

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
        const { activeTab } = this.state
        const { dataInfo } = this.props
        return (
            <div>
                <div> {/* className="kym-nav-scroll" --- 先保留不用*/}
                    <Nav pills horizontal="sm-center">
                        <NavItem>
                            <NavLink active={activeTab === "tab1"} onClick={() => { this.toggle('tab1'); }}>
                                動態總覽
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={activeTab === "tab2"} onClick={() => { this.toggle('tab2'); }}>
                                船舶明細
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={activeTab === "tab3"} onClick={() => { this.toggle('tab3'); }}>
                                進港預報
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={activeTab === "tab4"} onClick={() => { this.toggle('tab4'); }}>
                                實際進港
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={activeTab === "tab5"} onClick={() => { this.toggle('tab5'); }}>
                                出港預報
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={activeTab === "tab6"} onClick={() => { this.toggle('tab6'); }}>
                                實際出港
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <p className="mt-2">
                    簽證編號：{`ATXG108001726`}<br />
                    船舶名稱：{`閩龍298 (MINLONG 298)`}<br />
                    船舶號數：{`V17094`}<br />
                    IMO號碼：{`8532372`}
                </p>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="tab1">
                        <DataInfoView1 dataInfo={dataInfo} />
                    </TabPane>
                    <TabPane tabId="tab2">
                        <DataInfoView2 dataInfo={dataInfo} />
                    </TabPane>
                    <TabPane tabId="tab3">
                        <DataInfoView3 dataInfo={dataInfo} />
                    </TabPane>
                    <TabPane tabId="tab4">
                        <DataInfoView4 dataInfo={dataInfo} />
                    </TabPane>
                    <TabPane tabId="tab5">
                        <DataInfoView5 dataInfo={dataInfo} />
                    </TabPane>
                    <TabPane tabId="tab6">
                        <DataInfoView6 dataInfo={dataInfo} />
                    </TabPane>
                </TabContent>

                <FormGroup className="text-right text-sm-center">
                    <Button color="secondary m-1" onClick={this.handleGoBack}>回上一頁</Button>
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
        this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'QUERY', targetReducer })
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
        dataInfo: state.RescheduleAnnounceData.dataInfo
        //form_mode: state.formData.form_mode,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        setBlocking: (flag) => {
            dispatch(actions.setBlocking(flag))
        },
        setupFormMode: (form_mode) => {
            dispatch({ type: Ks.SETUP_FROM_MODE, form_mode, targetReducer })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataInfo);
