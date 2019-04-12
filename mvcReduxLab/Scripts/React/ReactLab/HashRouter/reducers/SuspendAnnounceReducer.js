import actions, { Ks } from '../../../CommonFF/actions.js'

const initialState = {
    // 查詢條件
    qryParams: {},
    // 分頁資訊
    dataList: [{
        value1: 'ATXG108001727', // <--- 請換成真實的欄位名稱
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001725',
        value2: 'V00813 (A8LW3)',
        value3: '皇帝 (OCEAN EMPEROR)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }, {
        value1: 'ATXG108001727',
        value2: '015990 (BR4042)',
        value3: '臺港22602號 (TIPM22602)'
    }
    ],

    form_no: '', // new create
    view_only: false, // 

    totalCount: 0,
    pageCount: 0,
    pageSelected: 0,
    pageSize: 10,
    // UI控制
    form_mode: 'QUERY', // { QUERY | LIST | VIEW }
    // 資料明細
    dataInfo: {},
    // PDF報表檔URL
    fileUrl: null
}

const SuspendAnnounceReducer = (state = initialState, action) => {
    //console.log('formView1Reducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'SuspendAnnounceReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.SETUP_FROM_MODE:
            return { ...state, form_mode: action.form_mode }
        case Ks.ASSIGN_VALUE:
            return { ...state, [action.name]: action.value }
        //return Object.assign({}, state, { [action.name]: action.value });
        case Ks.ASSIGN_STATE_PROPS:
            return { ...state, ...(action.properties) }
        //return Object.assign({}, state, action.properties);
        default:
            return state;
    }
}

export default SuspendAnnounceReducer;
