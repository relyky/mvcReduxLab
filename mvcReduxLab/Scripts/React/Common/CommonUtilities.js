/// 
/// common utilities
/// 共通的核心與最常用的高階基本函式。
/// 以"cu"為命名開頭。
/// 

import moment from 'moment';

/// 是空白字串： check IS empty / isNullOrWhitespace
export function cuIsEmpty(input) {
    return !input || !input.trim();
}

/// 非空白字串： check NOT empty
export function cuNotEmpty(input) {
    return !(!input || !input.trim());
}

/// when null as empty string.
export function cuNull2Empty(input) {
    if (!input || !input.trim()) return '';
    return input; // otherwise be self.
}

/// 檢查物件是否存在實體 --- 為物件或陣列且有內容物。
export function cuIsExists(obj) {
    if (Array.isArray(obj) && obj.length > 0) return true;
    if (typeof obj !== 'object') return false;
    if (obj == null) return false;
    return (Object.keys(obj).length > 0);
}

/// 檢查 obj === {} ?
export function cuIsEmptyObj(obj) {
    return (obj instanceof Object) && Object.keys(obj).length === 0 && obj.constructor === Object
}

/// helper function: 格式化數字成有千分位字串
export function cuFmtNum(num) {
    let parts;
    // 判断是否为数字
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
        // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
        // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
        // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
        // 的值变成了 12312312.123456713
        num = Number(num);
        // 处理小数点位数
        num = num.toString();
        // 分离数字的小数部分和整数部分
        parts = num.split('.');
        // 整数部分加[separator]分隔, 借用一个著名的正则表达式
        parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (','));

        return parts.join('.');
    }
    return num;
}


//-----------------------------------------------

/// 日期格式 YYYYMMDD → YYYY/MM/DD
export function cuYmd8ToYmd10(strDate) {
    return cuIsEmpty(strDate) ? '' : moment(strDate, 'YYYYMMDD').format('YYYY/MM/DD');
}

/// 日期格式 YYYY/MM/DD → YYYYMMDD
export function cuYmd10ToYmd8(strDate) {
    return cuIsEmpty(strDate) ? '' : moment(strDate, 'YYYY/MM/DD').format('YYYYMMDD');
}

//--------------------------------------------------
// 錯誤處理轉助函式 : BEGIN

/// 解析RCode錯誤訊息
/// RCode := { MessageCode, Message, Note }
export function castRCodePromise(originalPromise) {
    return Promise.resolve(originalPromise).then((resp) => {
        //console.log('castRCodePromise then', resp)
        const rCode = resp.data
        if (typeof rCode === 'object' && typeof rCode.MessageCode === 'string') { // is rCode?
            if (rCode.MessageCode === '11000') return resp; // truly success
            const xhr = Object.assign({}, resp, { rCode: rCode })
            throw xhr // throw xhr
        }
        // success
        return resp;
    });
}

/// 解析RCode錯誤訊息並alert
export function castRCodeAlertPromise(originalPromise) {
    return Promise.resolve(originalPromise).then((resp) => {
        //console.log('castRCodeAlertPromise then', resp)
        const rCode = resp.data
        if (typeof rCode === 'object' && typeof rCode.MessageCode === 'string') { // is rCode?
            if (rCode.MessageCode === '11000') return resp; // truly success
            const xhr = Object.assign({}, resp, { rCode: rCode })
            throw xhr // throw xhr
        }
        // success
        return resp;
    }).catch((xhr) => {
        //console.log('castRCodeAlertPromise catch', xhr)
        if (xhr.rCode) {
            // 邏輯錯誤
            console.error('錯誤訊息', xhr.rCode.MessageCode + ' ' + xhr.rCode.Message, xhr.rCode.Note);
            alert('錯誤訊息：\n' + xhr.rCode.MessageCode + ' ' + xhr.rCode.Message + '\n' + xhr.rCode.Note)
        } else {
            // 系統錯誤
            console.exception('系統錯誤！', xhr.response.status + '.' + xhr.response.statusText, xhr);
            alert('系統錯誤！\n' + xhr.response.status + '.' + xhr.response.statusText)
        }
        throw xhr // throw xhr
    });
}

// 錯誤處理轉助函式 : END
//--------------------------------------------------
// 共用的商業邏輯判斷 ： BEGIN

/// 判斷登入者是否為代辦
export function cuIsAssignee(loginUserInfo) {
    //console.log('ON: isAssignee', loginUserInfo)

    // 若登入者來自航務中心(北航、南航…etc)，則是代辦
    if (loginUserInfo.cpId === 'A00000011203')
        return true;

    return false;
}

/// 判斷登入者是否為代理商
export function cuIsAgent(loginUserInfo) {
    //console.log('ON: isAgent', loginUserInfo)

    // 無代理資料
    if (!Array.isArray(loginUserInfo.identityList))
        return false;

    // 若有[02.船務代理業]，則是代理人
    if (loginUserInfo.identityList.findIndex(c => c.identityCd == '02') > -1)
        return true;

    // othrewise
    return false;
}

/// 檢查是否有必要的許可證
export function cuCheckRequiredIdentity(loginUserInfo, requiredIdentityList) {
    //console.log('cuCheckRequiredIdentity', {loginUserInfo, requiredIdentityList})

    //01.船舶運送業 =>1
    //02.船務代理業 =>3
    //03.海運承攬業 =>4
    //04.貨櫃業     =>5

    return loginUserInfo.identityList.some((identity) => {
        return requiredIdentityList.some((reqId) => {
            //console.log('identityCd', identity.identityCd, reqId)
            return identity.identityCd === reqId;
        })
    })
}

/// 取得可選取業別清單
export function cuGetRadioBtnList(identityList, requiredIdentityList) {
    let item=[]
     identityList.forEach((identity) => {
         requiredIdentityList.forEach((reqId) => {

            if (identity.identityCd === reqId) {

                let value = '';
                switch (identity.identityCd) {
                    case '01':
                        value = '1';
                        break;
                    case '02':
                        value = '3';
                        break;
                    case '03':
                        value = '4';
                        break;
                    case '04':
                        value = '5';
                        break;
                    case '06':
                        value = '8';
                        break;
                    case '07':
                        value = '9';
                        break;
                    case '09':
                        value = 'A';
                        break;
                    default:
                        break;
                }

                item.push({ value: value, label: identity.identityName, licenseNo: identity.licenseNo })
            }
        })
    })
    return item
}

// 共用的商業邏輯判斷 ： END
//--------------------------------------------------

