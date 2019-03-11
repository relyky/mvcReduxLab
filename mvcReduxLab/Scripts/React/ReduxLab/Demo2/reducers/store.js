import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import helloInfo from './helloReducer.js'
import countInfo from './counterReducer.js'
import itemList from './listerReducer.js'

const rootReducer = combineReducers({
    appInfo,
    helloInfo,
    countInfo,
    itemList
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
