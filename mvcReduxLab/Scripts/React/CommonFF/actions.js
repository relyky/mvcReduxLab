import actionBase, { Ks as KsBase } from './actionBase.js';

//== constants - string ==========================================
/// 常數字串。用以避免打錯字的冏狀。
export const Ks = Object.assign(KsBase, {
    /// 往下新增或 overriding

    /// 一些範例
    //ASSIGN_VALUE_EX1: 'ASSIGN_VALUE_EX1',
    //ASSIGN_VALUE_EX2: 'ASSIGN_VALUE_EX2',
    //ASSIGN_VALUE_EX3: 'ASSIGN_VALUE_EX3',
});

//== actions =====================================================
/// 數據封包
export default Object.assign(actionBase, {
    /// 往下新增或 overriding

    /// 一些範例
    //assignValueEx1: (targetReducer) => {
    //    return {
    //        type: Ks.ASSIGN_VALUE_EX1,
    //        targetReducer: targetReducer
    //    }
    //},
    //assignValueEx2: (targetReducer) => {
    //    return {
    //        type: Ks.ASSIGN_VALUE_EX2,
    //        targetReducer: targetReducer
    //    }
    //}
});
