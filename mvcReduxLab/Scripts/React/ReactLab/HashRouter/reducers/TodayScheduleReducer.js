import actions, { Ks } from '../../../CommonFF/actions.js'

const nowDate = new Date()
const getNowDate = nowDate.getMonth != 11 ? nowDate.getFullYear() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getDate() :
    nowDate.getFullYear() + "/" + (nowDate.getMonth()) + "/" + nowDate.getDate()

const initialState = {
    // 查詢條件
    qryParams: {},

    startPort: {},
    // 分頁資訊
    dataList: [{
        value1: getNowDate + ' 07:00', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 07:00', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 10:00', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 10:00',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 10:00', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 10:00',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 15:30', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 15:30', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 18:00', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 18:00',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: getNowDate + ' 18:00', // <--- 請換成真實的欄位名稱
        value2: getNowDate + ' 18:00',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    ],

    dataList2: [{
        value1: '2019/04/01 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/01 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01  07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/01 15:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/01 18:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01  18:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    {
        value1: '2019/04/02 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/02 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02  07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/02 15:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/02 18:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02  18:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    {
        value1: '2019/04/03 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/03 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03  07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/03 15:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/03 18:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03  18:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    ],

    dataList3: [{
        value1: '2019/04/01 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/01 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01  07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/01 15:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/01 18:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/01  18:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    {
        value1: '2019/04/02 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/02 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02  07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/02 15:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/02 18:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/02  18:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    {
        value1: '2019/04/03 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03 07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/03 07:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03  07:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/03 15:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03 15:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    }, {
        value1: '2019/04/03 18:00', // <--- 請換成真實的欄位名稱
        value2: '2019/04/03  18:30',
        value3: '東港鹽埔漁港小琉球大福漁港航線(欣泰)'
    },
    ],

    form_no: '', // new create
    view_only: false, // 

    totalCount: 0,
    pageCount: 0,
    pageSelected: 0,
    pageSize: 10,
    // UI控制
    form_mode: 'QUERY', // { QUERY | LIST | VIEW }
    queryMode: 'TODAY', // { TODAY | THISWEEK | FLIGHTQUERY }
    // 資料明細
    dataInfo: {
        itemList: [
            { value1: '小琉球大福漁港', value2: '', value3: getNowDate + ' 07:00', value4: '準點' },
            { value1: '東港鹽埔漁港', value2: getNowDate + ' 07:30', value3: getNowDate + ' 08:00', value4: '準點' },
            { value1: '小琉球大福漁港', value2: getNowDate + ' 08:30', value3: '', value4: '準點' },
        ],
        itemList2: [
            { value1: '小琉球大福漁港', value2: '', value3: getNowDate + ' 07:00', value4: '準點' },
            { value1: '東港鹽埔漁港', value2: getNowDate + ' 07:30', value3: getNowDate + ' 08:00', value4: '準點' },
            { value1: '小琉球大福漁港', value2: getNowDate + ' 08:30', value3: '', value4: '準點' },
        ],
        itemList3: [
            { value1: '小琉球大福漁港', value2: '', value3: getNowDate + ' 07:00', value4: '準點' },
            { value1: '東港鹽埔漁港', value2: getNowDate + ' 07:30', value3: getNowDate + ' 08:00', value4: '準點' },
            { value1: '小琉球大福漁港', value2: getNowDate + ' 08:30', value3: '', value4: '準點' },
        ]
    },
    // PDF報表檔URL
    fileUrl: null
}

const TodayScheduleReducer = (state = initialState, action) => {
    //console.log('formView1Reducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'TodayScheduleReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.SETUP_FROM_MODE:
            console.log("TodayScheduleReducer SETUP", action.queryType)
            return { ...state, form_mode: action.form_mode, queryType: action.queryType }
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

export default TodayScheduleReducer;
