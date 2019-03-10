import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import countInfo from './counterReducer.js'

const rootReducer = combineReducers({
    appInfo,
    countInfo
})

const store = createStore(rootReducer)

export default store;
