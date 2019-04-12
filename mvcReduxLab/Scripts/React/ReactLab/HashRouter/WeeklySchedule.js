import React, { Component } from "react"
import { connect } from 'react-redux'

const WeeklySchedule = (props) => (
    <div className="container">
        <div className="jumbotron">
            <h1>本周航班</h1>
            <p>本周航班</p>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="card mb-4 bg-primary text-white shadow-sm" onClick={gotoFunc01}>
                    <div className="card-body">停航公告</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 bg-primary text-white shadow-sm" onClick={gotoFunc02}>
                    <div className="card-body">異動公告</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 bg-primary text-white shadow-sm" onClick={gotoFunc03}>
                    <div className="card-body">今日航班</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 bg-primary text-white shadow-sm" onClick={gotoFunc04}>
                    <div className="card-body">本周航班</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 bg-primary text-white shadow-sm" onClick={gotoFunc05}>
                    <div className="card-body">航班查詢</div>
                </div>
            </div>
        </div>

        <button type="button" className="btn btn-secondary btn-block" onClick={gotoIndex}>
            回索引頁
        </button>
    </div>
);

//---------------------------------------------

function gotoFunc01() {
    location = '#/SuspendAnnounce'
}

function gotoFunc02() {
    location = '#/RescheduleAnnounce'
}

function gotoFunc03() {
    location = '#/TodaySchedule'
}

function gotoFunc04() {
    location = '#/WeeklySchedule'
}

function gotoFunc05() {
    location = '#/ScheduleInquery'
}

function gotoMain() {
    location = '/MA08/Main'
}

function gotoIndex() {
    location = '#/'
}

//---------------------------------------------

const mapStateToProps = (state, ownProps) => {
    return {
        appInfo: state.appInfo,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        setBlocking: (flag) => {
            dispatch(actions.setBlocking(flag))
        },
        setupFormMode: (formAttrs, initValues) => {
            dispatch(actions.setupFormMode(formAttrs, initValues))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeeklySchedule);
