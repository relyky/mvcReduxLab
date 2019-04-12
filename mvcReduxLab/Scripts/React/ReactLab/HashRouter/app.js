import "babel-polyfill"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import axios from 'axios'
import store from './reducers/store.js'

import AppHelper from 'CommonFF/AppHelper.js'
import AppIndex from './AppIndex.js'
//import SuspendAnnounce from './SuspendAnnounce/AppForm'
//import RescheduleAnnounce from './RescheduleAnnounce/AppForm'
//import TodaySchedule from './TodaySchedule/AppForm'
//import WeeklySchedule from './WeeklySchedule/AppForm'
//import ScheduleInquery from './ScheduleInquery/AppForm'
import SuspendAnnounce from './SuspendAnnounce.js'
import RescheduleAnnounce from './RescheduleAnnounce.js'
import TodaySchedule from './TodaySchedule.js'
import WeeklySchedule from './WeeklySchedule.js'
import ScheduleInquery from './ScheduleInquery.js'

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + AuthToken;
axios.defaults.headers.common['RequestVerificationToken'] = globalappinfo.antiForgeryToken;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // mark as an ajax request
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <AppHelper appInfo={globalappinfo} noInitFormMode />
                        <Route exact path="/" component={AppIndex} />
                        <Route path="/SuspendAnnounce" component={SuspendAnnounce} />
                        <Route path="/RescheduleAnnounce" component={RescheduleAnnounce} />
                        <Route path="/TodaySchedule" component={TodaySchedule} />
                        <Route path="/WeeklySchedule" component={WeeklySchedule} />
                        <Route path="/ScheduleInquery" component={ScheduleInquery} />
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
