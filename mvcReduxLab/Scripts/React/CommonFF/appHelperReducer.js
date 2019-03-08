import actions, { Ks } from './actions.js';

const initialState = {
    functionId: undefined,
    appTitle: undefined,
    appId: undefined, // 應該用不到。先預留名稱。
    antiForgeryToken: undefined,
    authToken: undefined, // authToken 有可能放在cookie中，先預留名稱。
    entryFormNo: undefined, // 輸入表單編號，若有值則載入該表單。
    entryMode: undefined, // 輸入表單模式 := { APPLY | REVIEW | REVIEWODP }
    loginUserInfo: undefined,
    blocking: false,
    errorList: [], // 錯誤訊息 := [{caption, message},...]
}

//    errorList: [
//        { caption: '錯誤訊息', message: '我是測試用錯誤訊息。我是測試用錯誤訊息。我是測試用錯誤訊息。' },
//        { caption: '邏輯錯誤', message: '我是邏輯錯誤' },
//        { caption: '系統錯誤', message: '我是系統錯誤' },
//    ]

const appHelperReducer = (state = initialState, action) => {
    //console.log('formView1Reducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'appHelperReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            return Object.assign({}, state, { [action.name]: action.value });
        case Ks.SETUP_APP_INFO:
            return Object.assign({}, state, {
                functionId: action.appInfo.functionId,
                appTitle: action.appInfo.appTitle,
                appId: action.appInfo.appId,
                antiForgeryToken: action.appInfo.antiForgeryToken,
                loginUserInfo: action.appInfo.loginUserInfo,
                entryFormNo: action.appInfo.entryFormNo,
                entryMode: action.appInfo.entryMode
            });
        case Ks.SET_BLOCKING:
            return Object.assign({}, state, { blocking: action.flag });
        case Ks.ADD_ERROR_MESSAGE:
            {
                const { caption, message } = action.payload // 解析封包
                const errorList = state.errorList.slice() // copy array
                errorList.push({ caption, message })
                return Object.assign({}, state, {errorList})
            }
        default:
            return state;
    }
}

export default appHelperReducer;
