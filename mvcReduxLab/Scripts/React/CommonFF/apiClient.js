import axios from 'axios'
import { castRCodePromise, castRCodeAlertPromise } from '../Common/CommonUtilities.js'
import apiCommon from '../Common/apiCommon.js';

export default Object.assign(apiCommon, {
    /// 往下新增或 overriding    
    
    ///// 範本
    //manipulateFormDataPromise: (args)=> {
    //    const url = '/Area/Controller/ManipulateFormData'
    //    return castRCodeAlertPromise(axios.post(url, args))
    //},
});
