import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import accountInfo from './accountReducer.js'
import userInfo from './userReducer.js'

const rootReducer = combineReducers({
    appInfo,
    accountInfo,
    userInfo
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
