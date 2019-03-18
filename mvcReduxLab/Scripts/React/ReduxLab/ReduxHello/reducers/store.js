import { createStore, combineReducers } from 'redux'
import appInfo from 'CommonFF/appHelperReducer.js'
import helloInfo from './helloReducer.js'

const rootReducer = combineReducers({
    appInfo,
    helloInfo,
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
