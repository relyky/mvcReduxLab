import React, { Component } from "react"
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'
//import apiClient from './apiClient.js'
import AppHelper from 'CommonFF/AppHelper.js'
import { cuIsAssignee, cuCheckRequiredIdentity, cuNotEmpty, cuIsExists } from 'Common/CommonUtilities.js'

import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, InputGroup, ButtonGroup } from 'reactstrap'
import { FormBlock, FormPanel, TextField, CheckboxField, RadioField, SelectField, ButtonGroupField, ButtonRadioField, FilterSelectField, FilterSelectProField } from 'CommonMA/FormInputFields.js'
import apiClient from "./apiClient";

///## resource
const targetReducer = 'WeeklyScheduleReducer';

//======================================================================

class DataSearch extends Component {
    constructor(props) {
        super(props)

        //const nowDate = new Date()
        //const getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
        //    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        //const weekDate = new Date(nowDate);
        //weekDate.setDate(weekDate.getDate() + 7);
        //const getWeekDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
        //    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();

        // 查詢條件
        this.state = {
            queryType: 'Today',
            queryParams: {
                param1: '',
                param2: '',
                param3: '',
                param4: '',
                param5: '',
                param6: '',
                param7: '',
                fooNewShipFrepUnit: '',
                fooStartDate: '',
                fooEndDate: '',

            },
            formCtrl: {
                disabled: false,
                readOnly: false
            },
            testStartPortList: [],
            testEndPortList: [],
        }

        this.handleParamChange = this.handleParamChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleEndPortChange = this.handleEndPortChange.bind(this);
        this.setDate = this.setDate.bind(this)
    }

    componentDidMount() {
        this.StartPortData();
        this.setDate();
    }

    render() {
        //console.log('DataSearch render',this.props)
        const { queryParams } = this.state
        const { formCtrl } = this.state

        return (
            <div>
                {/*<div className="text-center">
                    <RadioField {...formCtrl} 
                        //label="" 
                        name="queryType"
                        value={this.state.queryType}
                        //note="註：此為參考用客製範本。"
                        //validMessage=""
                        //invalidMessage="未選取項目。"
                        onValidate={(name, value) => cuNotEmpty(value)}
                        onChange={this.handleValueChange}
                        options={[
                            { value: 'Today', label: '今日航班' },
                            { value: 'ThisWeek', label: '本週航班' },
                            { value: 'FlightQuery', label: '航班查詢' }
                        ]}
                    />
                </div>*/}
                {this.state.queryType === 'Today' &&
                    <FormPanel caption="今日航班查詢" >
                        <Row className="text-center mb-0">
                            <Col md={12}>
                                <ButtonRadioField {...formCtrl}
                                    className="mb-0"
                                    //label=""
                                    name="queryType"
                                    value={this.state.queryType}
                                    //note="註：此為參考用客製範本。"
                                    //validMessage="選取項目符合規定。"
                                    //invalidMessage="未選取項目。"
                                    onValidate={(name, value) => cuNotEmpty(value)}
                                    onChange={(name, value) => this.handleValueChange(name, value)}
                                    options={[
                                        { value: 'Today', label: '今日航班' },
                                        { value: 'ThisWeek', label: '本週航班' },
                                        { value: 'FlightQuery', label: '航班查詢' }
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>出發港口</Label>
                                    <Col xs={8}>
                                        {/*<TextField type="text" name="param1" className="mb-0"
                                    value={queryParams.param1 || ''}
                                    onChange={this.handleParamChange}
                                />*/}
                                        <SelectField className="mb-0"
                                            name="param1"
                                            value={queryParams.param1}
                                            placeholder="請選擇"
                                            onChange={(name, value) => this.handleEndPortChange(name, value)}
                                            options={this.state.testStartPortList}
                                        //options={[
                                        //    { value: 'A', label: '小琉球白沙港' },
                                        //    { value: 'B', label: '北竿白沙灣' },
                                        //    { value: 'C', label: '布袋港' },
                                        //    { value: 'D', label: '吉貝漁港' },
                                        //    { value: 'E', label: '赤崁漁港' },
                                        //    { value: 'F', label: '東引中柱港' },
                                        //    { value: 'G', label: '東港鹽埔漁港' }
                                        //]}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>目的港口</Label>
                                    <Col xs={8}>
                                        {/*<TextField type="text" name="param1" className="mb-0"
                                    value={queryParams.param1 || ''}
                                    onChange={this.handleParamChange}
                                />*/}
                                        <SelectField className="mb-0"
                                            name="param2"
                                            value={queryParams.param2}
                                            placeholder="請選擇"
                                            onChange={this.handleParamChange}
                                            options={this.state.testEndPortList}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>航班起日</Label>
                                    <Col xs={8}>
                                        <TextField type="text" name="fooStartDate" className="mb-0"
                                            placeholder=""
                                            value={queryParams.fooStartDate || ''}
                                            onChange={this.handleParamChange}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>航班迄日</Label>
                                    <Col xs={8}>
                                        <TextField type="text" name="fooEndDate" className="mb-0"
                                            placeholder=""
                                            value={queryParams.fooEndDate || ''}
                                            onChange={this.handleParamChange}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="text-right text-sm-center">
                            <Button color="primary m-1" onClick={this.handleSearch}>開始查詢</Button>
                        </FormGroup>
                    </FormPanel >
                }
                {this.state.queryType === 'ThisWeek' &&
                    <FormPanel caption="本週航班查詢" >
                        <Row className="text-center mb-0">
                            <Col md={12}>
                                <ButtonRadioField {...formCtrl}
                                    className="mb-0"
                                    //label=""
                                    name="queryType"
                                    value={this.state.queryType}
                                    //note="註：此為參考用客製範本。"
                                    //validMessage="選取項目符合規定。"
                                    //invalidMessage="未選取項目。"
                                    onValidate={(name, value) => cuNotEmpty(value)}
                                    onChange={(name, value) => this.handleValueChange(name, value)}
                                    options={[
                                        { value: 'Today', label: '今日航班' },
                                        { value: 'ThisWeek', label: '本週航班' },
                                        { value: 'FlightQuery', label: '航班查詢' }
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>出發港口</Label>
                                    <Col xs={8}>
                                        {/*<TextField type="text" name="param1" className="mb-0"
                                    value={queryParams.param1 || ''}
                                    onChange={this.handleParamChange}
                                />*/}
                                        <SelectField value={queryParams.param1}
                                            name="param1"
                                            className="mb-0"
                                            placeholder="請選擇"
                                            onChange={this.handleParamChange}
                                            options={[
                                                { value: 'A', label: '小琉球白沙港' },
                                                { value: 'B', label: '北竿白沙灣' },
                                                { value: 'C', label: '布袋港' },
                                                { value: 'D', label: '吉貝漁港' },
                                                { value: 'E', label: '赤崁漁港' },
                                                { value: 'F', label: '東引中柱港' },
                                                { value: 'G', label: '東港鹽埔漁港' }
                                            ]}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>目的港口</Label>
                                    <Col xs={8}>
                                        {/*<TextField type="text" name="param1" className="mb-0"
                                    value={queryParams.param1 || ''}
                                    onChange={this.handleParamChange}
                                />*/}
                                        <SelectField value={queryParams.param2}
                                            name="param2"
                                            className="mb-0"
                                            placeholder="請選擇"
                                            onChange={this.handleParamChange}
                                            options={[
                                                { value: 'G', label: '東港鹽埔漁港' },
                                                { value: 'H', label: '屏東大鵬灣遊艇港' },
                                            ]}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>航班起日</Label>
                                    <Col xs={8}>
                                        <TextField type="text" name="fooStartDate" className="mb-0"
                                            name="fooStartDate"
                                            placeholder=""
                                            value={queryParams.fooStartDate || ''}
                                            onChange={(name, value) => this.setDate(name, value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>航班迄日</Label>
                                    <Col xs={8}>
                                        <TextField type="text" name="fooEndDate" className="mb-0"
                                            name="fooEndDate"
                                            placeholder=""
                                            value={queryParams.fooEndDate || ''}
                                            onChange={(name, value) => this.setDate(name, value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="text-right text-sm-center">
                            <Button color="primary m-1" onClick={this.handleSearch}>開始查詢</Button>
                        </FormGroup>
                    </FormPanel >
                }
                {this.state.queryType === 'FlightQuery' &&
                    <FormPanel caption="航班查詢" >
                        <Row className="text-center">
                            <Col md={12}>
                                <ButtonRadioField {...formCtrl}
                                    className="mb-0"
                                    //label=""
                                    name="queryType"
                                    value={this.state.queryType}
                                    //note="註：此為參考用客製範本。"
                                    //validMessage="選取項目符合規定。"
                                    //invalidMessage="未選取項目。"
                                    onValidate={(name, value) => cuNotEmpty(value)}
                                    onChange={(name, value) => this.handleValueChange(name, value)}
                                    options={[
                                        { value: 'Today', label: '今日航班' },
                                        { value: 'ThisWeek', label: '本週航班' },
                                        { value: 'FlightQuery', label: '航班查詢' }
                                    ]}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>出發港口</Label>
                                    <Col xs={8}>
                                        {/*<TextField type="text" name="param1" className="mb-0"
                                    value={queryParams.param1 || ''}
                                    onChange={this.handleParamChange}
                                />*/}
                                        <SelectField value={queryParams.param1}
                                            name="param1"
                                            className="mb-0"
                                            placeholder="請選擇"
                                            onChange={this.handleParamChange}
                                            options={[
                                                { value: 'A', label: '小琉球白沙港' },
                                                { value: 'B', label: '北竿白沙灣' },
                                                { value: 'C', label: '布袋港' },
                                                { value: 'D', label: '吉貝漁港' },
                                                { value: 'E', label: '赤崁漁港' },
                                                { value: 'F', label: '東引中柱港' },
                                                { value: 'G', label: '東港鹽埔漁港' }
                                            ]}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>目的港口</Label>
                                    <Col xs={8}>
                                        {/*<TextField type="text" name="param1" className="mb-0"
                                    value={queryParams.param1 || ''}
                                    onChange={this.handleParamChange}
                                />*/}
                                        <SelectField value={queryParams.param2}
                                            name="param2"
                                            className="mb-0"
                                            placeholder="請選擇"
                                            onChange={this.handleParamChange}
                                            options={[
                                                { value: 'G', label: '東港鹽埔漁港' },
                                                { value: 'H', label: '屏東大鵬灣遊艇港' },
                                            ]}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>航班起日</Label>
                                    <Col xs={8}>
                                        <TextField type="text" name="fooStartDate" className="mb-0"
                                            placeholder=""
                                            value={queryParams.fooStartDate || ''}
                                            onChange={this.handleParamChange}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup row>
                                    <Label xs={4}>航班迄日</Label>
                                    <Col xs={8}>
                                        <TextField type="text" name="fooEndDate" className="mb-0"
                                            placeholder=""
                                            value={queryParams.fooEndDate || ''}
                                            onChange={this.handleParamChange}
                                        />
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="text-right text-sm-center">
                            <Button color="primary m-1" onClick={this.handleSearch}>開始查詢</Button>
                        </FormGroup>
                    </FormPanel >

                    //<Button block color="secondary mt-2" onClick={() => location = '#/'}>回上一頁</Button>
                }
            </div>
        )
    }

    setDate() {
        const nowDate = new Date()
        const getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
            nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate();
        const weekDate = new Date(nowDate);
        weekDate.setDate(weekDate.getDate() + 7);
        const getWeekDate = weekDate.getMonth != 11 ? weekDate.getFullYear() + "/" + (weekDate.getMonth() + 1) + "/" + weekDate.getDate() :
            weekDate.getFullYear() + "/" + (weekDate.getMonth()) + "/" + weekDate.getDate();

        let queryParams = this.state.queryParams

        console.log("Debug SetDate A FooStartDate:", queryParams)

        if (this.state.queryType == "Today") {
            queryParams = { ...queryParams, fooStartDate: getNowDate, fooEndDate: getNowDate }
            console.log("Debug SetDate B-1 FooStartDate:", queryParams)
            this.setState(
                { queryParams },
            )
            console.log("Debug SetDate B-2 FooStartDate:", this.state)
        }
        else if (this.state.queryType == "ThisWeek") {
            queryParams = { ...queryParams, fooStartDate: getNowDate, fooEndDate: getNowDate }
            console.log("Debug SetDate C-1 FooStartDate:", queryParams)
            this.setState(
                { queryParams },
            )
            console.log("Debug SetDate C-2 FooStartDate:", this.state)
        }
        else if (this.state.queryType == "FlightQuery") {
            queryParams = { ...queryParams, fooStartDate: getNowDate, fooEndDate: getNowDate }
            console.log("Debug SetDate D-1 FooStartDate:", queryParams)
            this.setState(
                { queryParams },
            )
            console.log("Debug SetDate D-2 FooStartDate:", this.state)
        }
    }

    StartPortData(name, value) {
        name = ''
        const args = { name }

        apiClient.StartPort(args).then((resp) => {
            var itemList = resp.data
            //let {testStartPortList} = this.state
            //testStartPortList = {...testStartPortList, [name]: value.trim() }
            this.setState({
                testStartPortList: itemList,
                testEndPortList: itemList
            })
            console.log("testStartPortList ", itemList)
        })
        //apiClient.LoadStartPort
        //apiClient.LoadStartPort(arg).then((resp) => {
        //    const itemList = resp.data
        //})
    }

    handleEndPortChange(name, value) {
        const args = { value }
        console.log("handleEndPortChange queryEndPortChange 1", args)
        apiClient.EndPort(args).then((resp) => {
            var itemList = resp.data
            let { queryParams } = this.state
            queryParams = { ...queryParams, [name]: value }
            //testStartPortList = {...testStartPortList, [name]: value.trim() }
            this.setState(
                {
                    queryParams,
                    testEndPortList: itemList
                }
            )
            console.log("testEndPortList ", itemList)
        })
    }

    handleValueChange(name, value) {
        console.log("handleValueChange", name, value)
        this.setState(
            { [name]: value }
        )
    }

    // 改寫handleValueChange
    handleParamChange(name, value) {
        let { queryParams } = this.state // 取原值
        queryParams = { ...queryParams, [name]: value.trim() } // 給新值
        this.setState({ queryParams }) // 更新
        console.log("paraChange", { queryParams })
    }

    handleValueChange(name, value) {
        this.setState({
            [name]: value
        })
    }

    handleSearch() {
        console.log("Check Search Run")
        console.log("Check qu")
        if (this.state.queryType == "Today") {
            // 模擬查詢情境
            this.props.setBlocking(true)
            setTimeout(() => {
                this.props.dispatch({ type: Ks.SETUP_FROM_MODE, queryType: 'TODAY', form_mode: 'LIST', targetReducer })
                //this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST' })
                this.props.setBlocking(false)
            }, 2000)
        }
        else if (this.state.queryType == "ThisWeek") {
            // 模擬查詢情境
            this.props.setBlocking(true)
            setTimeout(() => {
                this.props.dispatch({ type: Ks.SETUP_FROM_MODE, queryType: 'THISWEEK', form_mode: 'LIST', targetReducer })
                //this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST' })
                this.props.setBlocking(false)
            }, 2000)
        }
        else if (this.state.queryType == "FlightQuery") {
            // 模擬查詢情境
            this.props.setBlocking(true)
            setTimeout(() => {
                this.props.dispatch({ type: Ks.SETUP_FROM_MODE, queryType: 'FLIGHTQUERY', form_mode: 'LIST', targetReducer })
                //this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'LIST' })
                this.props.setBlocking(false)
            }, 2000)
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
        formData: state.WeeklyScheduleData,
        form_mode: state.WeeklyScheduleData.form_mode,
        queryType: state.WeeklyScheduleData.queryType,
        //formData: {
        //    commandBar: state.commandBar, // formCtrl
        //    formData1: state.formData1,
        //    formData2: state.formData2,
        //},
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch,
        setBlocking: (flag) => {
            dispatch(actions.setBlocking(flag))
        },
        setupFormMode: (form_mode, queryType) => ({
            type: Ks.SETUP_FROM_MODE,
            form_mode,
            targetReducer,
            queryType
        }),
        //setupFormMode: (formAttrs, initValues) => {
        //    dispatch(actions.setupFormMode(formAttrs, initValues, targetReducer))
        //}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataSearch);
