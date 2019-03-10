import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import countInfo from './counterReducer.js'
import itemList from './listerReducer.js'

const rootReducer = combineReducers({
    appInfo,
    countInfo,
    itemList
})

const store = createStore(rootReducer)

export default store;
