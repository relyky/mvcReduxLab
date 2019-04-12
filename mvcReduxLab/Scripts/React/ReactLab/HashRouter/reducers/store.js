import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
//import commandBar from './cmmandBarReduder.js'
import RescheduleAnnounceData from './RescheduleAnnounceReducer.js'
import ScheduleInqueryData from './ScheduleInqueryReducer.js'
import SuspendAnnounceData from './SuspendAnnounceReducer.js'
import TodayScheduleData from './TodayScheduleReducer.js'
import WeeklyScheduleData from './WeeklyScheduleReducer.js'

const rootReducer = combineReducers({
    appInfo,
    //old
    //commandBar, 
    SuspendAnnounceData,
    RescheduleAnnounceData,
    TodayScheduleData,
    WeeklyScheduleData,
    ScheduleInqueryData,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
