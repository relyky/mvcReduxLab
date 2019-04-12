import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions, { Ks } from 'CommonFF/actions.js'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import { Button, FormGroup } from 'reactstrap'

const targetReducer = 'ScheduleInqueryReducer';

class DataLister extends Component {
    constructor(props) {
        super(props)

        const nowDate = new Date()
        const getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
            nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate()

        this.state = {
            activeTab: 'tab1',
            startDate: getNowDate,
            endDate: getNowDate
        }

        this.handleValueChange = this.handleValueChange.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
        this.hanldeItemClick = this.hanldeItemClick.bind(this)
    }

    render() {
        const { dataList } = this.props

        //臨時LIST
        const { dataList2 } = this.props
        const { dataList3 } = this.props

        const { queryType } = this.props
        const allPROPS = this.props
        console.log("DataLister FormqueryType :", allPROPS)

        return (
            <div>
                {queryType === 'TODAY' &&
                    <div>
                        <div className="py-1">
                            <span className="lead">查詢條件: {this.state.startDate} ~ {this.state.endDate}<br />{"小琉球大福漁港"} ~ {"東港鹽埔漁港"}</span>
                        </div>
                        <ListGroup>
                            <ListGroupItem className="px-0">
                                <Row noGutters>
                                    <Col xs={1} className="my-auto text-center"></Col>
                                    <Col xs={5}>實際開航時間</Col>
                                    <Col xs={6}>實際抵達時間</Col>
                                </Row>
                            </ListGroupItem>
                            {dataList.map((item, index) =>
                                <ListGroupItem key={index} className="px-0">
                                    <Row noGutters>
                                        <Col xs={1} className="my-auto text-center" onClick={() => alert('click testing')}>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={10} onClick={() => this.hanldeItemClick(item, index)}>
                                            <Row noGutters>
                                                <Col xs={6}>{item.value1}</Col>
                                                <Col xs={6}>{item.value2}</Col>
                                                <Col xs={12}>
                                                    <span className="lead">{item.value3}</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={1} className="my-auto text-center" onClick={() => this.hanldeItemClick(item, index)}>
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )}
                        </ListGroup>
                        <FormGroup className="text-right text-sm-center">
                            <Button color="primary m-1">載入更多</Button>
                            <Button color="secondary m-1">重新載入</Button>
                            <Button color="secondary m-1" onClick={this.handleGoBack}>重新查詢</Button>
                        </FormGroup>
                    </div>
                }
                {queryType === 'THISWEEK' &&
                    <div>
                        <div className="py-1">
                            <span className="lead">查詢條件: {this.state.startDate} ~ {this.state.endDate}<br />{"小琉球大福漁港"} ~ {"東港鹽埔漁港"}</span>
                        </div>
                        <ListGroup>
                            <ListGroupItem className="px-0">
                                <Row noGutters>
                                    <Col xs={1} className="my-auto text-center"></Col>
                                    <Col xs={5}>實際開航時間</Col>
                                    <Col xs={6}>實際抵達時間</Col>
                                </Row>
                            </ListGroupItem>
                            {dataList2.map((item, index) =>
                                <ListGroupItem key={index} className="px-0">
                                    <Row noGutters>
                                        <Col xs={1} className="my-auto text-center" onClick={() => alert('click testing')}>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={10} onClick={() => this.hanldeItemClick(item, index)}>
                                            <Row noGutters>
                                                <Col xs={6}>{item.value1}</Col>
                                                <Col xs={6}>{item.value2}</Col>
                                                <Col xs={12}>
                                                    <span className="lead">{item.value3}</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={1} className="my-auto text-center" onClick={() => this.hanldeItemClick(item, index)}>
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )}
                        </ListGroup>
                        <FormGroup className="text-right text-sm-center">
                            <Button color="primary m-1">載入更多</Button>
                            <Button color="secondary m-1">重新載入</Button>
                            <Button color="secondary m-1" onClick={this.handleGoBack}>重新查詢</Button>
                        </FormGroup>
                    </div>
                }
                {queryType === 'FLIGHTQUERY' &&
                    <div>
                        <div className="py-1">
                            <span className="lead">查詢條件: {this.state.startDate} ~ {this.state.endDate}<br />{"小琉球大福漁港"} ~ {"東港鹽埔漁港"}</span>
                        </div>
                        <ListGroup>
                            <ListGroupItem className="px-0">
                                <Row noGutters>
                                    <Col xs={1} className="my-auto text-center"></Col>
                                    <Col xs={5}>實際開航時間</Col>
                                    <Col xs={6}>實際抵達時間</Col>
                                </Row>
                            </ListGroupItem>
                            {dataList3.map((item, index) =>
                                <ListGroupItem key={index} className="px-0">
                                    <Row noGutters>
                                        <Col xs={1} className="my-auto text-center" onClick={() => alert('click testing')}>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </Col>
                                        <Col xs={10} onClick={() => this.hanldeItemClick(item, index)}>
                                            <Row noGutters>
                                                <Col xs={6}>{item.value1}</Col>
                                                <Col xs={6}>{item.value2}</Col>
                                                <Col xs={12}>
                                                    <span className="lead">{item.value3}</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={1} className="my-auto text-center" onClick={() => this.hanldeItemClick(item, index)}>
                                            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )}
                        </ListGroup>
                        <FormGroup className="text-right text-sm-center">
                            <Button color="primary m-1">載入更多</Button>
                            <Button color="secondary m-1">重新載入</Button>
                            <Button color="secondary m-1" onClick={this.handleGoBack}>重新查詢</Button>
                        </FormGroup>
                    </div>
                }
            </div>
        )
    }

    handleValueChange(name, value) {
        this.setState({ [name]: value })
    }

    handleGoBack() {
        this.props.dispatch({ type: Ks.SETUP_FROM_MODE, form_mode: 'QUERY', targetReducer })
    }

    hanldeItemClick(item, index) {
        const queryType = this.props.queryType
        console.log("This hanldeItemClick queryType", queryType)
        // 模擬查詢情境
        this.props.setBlocking(true)
        setTimeout(() => {
            this.props.dispatch({ type: Ks.SETUP_FROM_MODE, queryType, form_mode: 'VIEW', targetReducer })
            this.props.setBlocking(false)
        }, 1000)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
        dataList: state.ScheduleInqueryData.dataList,
        dataList2: state.ScheduleInqueryData.dataList2,
        dataList3: state.ScheduleInqueryData.dataList3,
        queryType: state.ScheduleInqueryData.queryType,
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
            dispatch({ type: Ks.SETUP_FROM_MODE, queryType, form_mode, targetReducer })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataLister);
