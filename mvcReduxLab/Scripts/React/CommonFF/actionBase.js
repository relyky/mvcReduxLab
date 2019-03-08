
//== constants - string ==========================================
// 常數字串。用以避免打錯字的冏狀。
export const Ks = {
    ASSIGN_VALUE: 'ASSIGN_VALUE',     // 更新1個property
    ASSIGN_STATE_PROPS: 'ASSIGN_STATE_PROPS', // 更新多個property
    SET_BLOCKING: 'SET_BLOCKING',     // 畫面鎖定
    SETUP_APP_INFO: 'SETUP_APP_INFO', // 更新AppInfo
    SETUP_FROM_MODE: 'SETUP_FROM_MODE', // 設定表單模式
    FILL_FORM_DATA: 'FILL_FORM_DATA',
    ASSIGN_FROM_DATA_1: 'ASSIGN_FROM_DATA_1', // 受理單位
    ASSIGN_FROM_DATA_2: 'ASSIGN_FROM_DATA_2', // 申請人
    ASSIGN_FROM_DATA_3: 'ASSIGN_FROM_DATA_3', // 委託人
    ASSIGN_FROM_DATA_4: 'ASSIGN_FROM_DATA_4', // 申請內容
    ASSIGN_FROM_DATA_5: 'ASSIGN_FROM_DATA_5', // 上傳分件
    ASSIGN_FROM_DATA_6: 'ASSIGN_FROM_DATA_6', // extending
    ASSIGN_FROM_DATA_7: 'ASSIGN_FROM_DATA_7', // extending
    ASSIGN_FROM_DATA_8: 'ASSIGN_FROM_DATA_8', // extending
    ASSIGN_FROM_DATA_9: 'ASSIGN_FROM_DATA_9', // extending
    ASSIGN_FROM_DATA_A: 'ASSIGN_FROM_DATA_A', // 審查歷程
    ASSIGN_FROM_DATA_B: 'ASSIGN_FROM_DATA_B', // 審查意見
    ASSIGN_FROM_DATA_C: 'ASSIGN_FROM_DATA_C', // 核准資料
    ASSIGN_FROM_DATA_D: 'ASSIGN_FROM_DATA_D', // extending
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    CHECK_ALL_ITEM: 'CHECK_ALL_ITEM',
    REMOVE_CHECKED_ITEM: 'REMOVE_CHECKED_ITEM',
    INSERT_ITEM: 'INSERT_ITEM', 
    UPDATE_ITEM: 'UPDATE_ITEM', // 更新 Item 
    SWITCH_ITEM_MODE: 'SWITCH_ITEM_MODE',
    UPDATE_ITEM_BY_INDEX: 'UPDATE_ITEM_BY_INDEX',
    UPDATE_ITEM_BY_SN: 'UPDATE_ITEM_BY_SN',
    UPDATE_ITEM_BY_KEY: 'UPDATE_ITEM_BY_KEY',
    REMOVE_ITEM_BY_INDEX: 'REMOVE_ITEM_BY_INDEX',
    REMOVE_ITEM_BY_SN: 'REMOVE_ITEM_BY_SN',
    REMOVE_ITEM_BY_KEY: 'REMOVE_ITEM_BY_KEY',
    UPDATE_DETAIL_BY_INDEX: 'UPDATE_DETAIL_BY_INDEX', // 依index更新detail
    UPDATE_DETAIL_BY_SN: 'UPDATE_DETAIL_BY_SN',   // 依sn更新detail
    UPDATE_DETAIL_BY_KEY: 'UPDATE_DETAIL_BY_KEY', // 依key更新detail
    ASSIGN_GROUP_PROPS: 'ASSIGN_GROUP_PROPS', // 更新 group object 多個property
    INSERT_ATTACHMENT: 'INSERT_ATTACHMENT',
    REMOVE_ATTACHMENT: 'REMOVE_ATTACHMENT',
    FILL_FORM_ATTACHMENT: 'FILL_FORM_ATTACHMENT',
    ADD_PHRASE: 'ADD_PHRASE',
    ADD_ERROR_MESSAGE: 'ADD_ERROR_MESSAGE',
    CLEAR_ERROR_MESSAGE: 'CLEAR_ERROR_MESSAGE'
}

////== constants - Enum ============================================
//export const VisibleFiltersEnum = {
//    SHOW_ALL: 'SHOW_ALL',
//    SHOW_COMPLETED: 'SHOW_COMPLETED',
//    SHOW_ACTIVE: 'SHOW_ACTIVE',
//}

//== actions =====================================================

////# internal variable for actions
//let nextTodoId = 0; // for action [addToDo] only

export default {
    //addTodo: (text) => {
    //    return {
    //        type: 'ADD_TODO',
    //        id: nextTodoId++,
    //        text: text
    //    }
    //},
    assignValue: (name, value, targetReducer) => {
        return {
            type: Ks.ASSIGN_VALUE,
            name: name,
            value: value,
            targetReducer: targetReducer
        }
    },
    setBlocking: (flag) => {
        return {
            type: Ks.SET_BLOCKING,
            flag: flag
        }
    },
    setupAppInfo: (appInfo) => {
        return {
            type: Ks.SETUP_APP_INFO,
            appInfo: appInfo
        }
    },
    setupFormMode: (formAttrs, initValues) => {
        return {
            type: Ks.SETUP_FROM_MODE,
            formAttrs: formAttrs,  // form attributes: object
            initValues: initValues // initial values: object
        }
    },
    assignStateProps: (properties, targetReducer) => {
        return {
            type: Ks.ASSIGN_STATE_PROPS,
            properties: properties,
            targetReducer: targetReducer
        }
    },
    fillFormData: (formData) => {
        return {
            type: Ks.FILL_FORM_DATA,
            formData: formData
        }
    },
    assignFormData1: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_1,
            formData1: formData.formData1
        }
    },
    assignFormData2: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_2,
            formData2: formData.formData2
        }
    },
    assignFormData3: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_3,
            formData3: formData.formData3
        }
    },
    assignFormData4: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_4,
            formData4: formData.formData4
        }
    },
    assignFormData5: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_5,
            formData5: formData.formData5
        }
    },
    assignFormData6: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_6,
            formData6: formData.formData6
        }
    },
    assignFormData7: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_7,
            formData7: formData.formData7
        }
    },
    assignFormData8: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_8,
            formData8: formData.formData8
        }
    },
    assignFormData9: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_9,
            formData9: formData.formData9
        }
    },
    assignFormDataA: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_A,
            formDataA: formData.formDataA
        }
    },
    assignFormDataB: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_B,
            formDataB: formData.formDataB
        }
    },
    assignFormDataC: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_C,
            formDataC: formData.formDataC
        }
    },
    assignFormDataD: (formData) => {
        return {
            type: Ks.ASSIGN_FROM_DATA_D,
            formDataD: formData.formDataD
        }
    },
    toggleItem: (item, targetReducer) => {
        return {
            type: Ks.TOGGLE_ITEM,
            item: item,
            targetReducer: targetReducer
        }
    },
    checkAllItem: (checkFlag, targetReducer) => {
        return {
            type: Ks.CHECK_ALL_ITEM,
            checkFlag: checkFlag,
            targetReducer: targetReducer
        }
    },
    removeCheckedItem: (targetReducer) => {
        return {
            type: Ks.REMOVE_CHECKED_ITEM,
            targetReducer: targetReducer
        }
    },
    insertItem: (itemValues, detailList, targetReducer) => {
        return {
            type: Ks.INSERT_ITEM,
            itemValues: itemValues,
            detailList: detailList,
            targetReducer: targetReducer
        }
    },
    updateItem: (itemValues, detailList, targetReducer) => {
        return {
            type: Ks.UPDATE_ITEM,
            itemValues: itemValues,
            detailList: detailList,
            targetReducer: targetReducer
        }
    },
    switchItemMode: (item, flag, targetReducer) => {
        return {
            type: Ks.SWITCH_ITEM_MODE,
            item: item,
            flag: flag,
            targetReducer: targetReducer
        }
    },
    updateItemByIndex: (index, newItemInfo, targetReducer) => {
        return {
            type: Ks.UPDATE_ITEM_BY_INDEX,
            index: index,
            newItemInfo: newItemInfo,
            targetReducer: targetReducer
        }
    },
    updateItemBySn: (itemSn, newItemInfo, targetReducer) => {
        return {
            type: Ks.UPDATE_ITEM_BY_SN,
            itemSn: itemSn,
            newItemInfo: newItemInfo,
            targetReducer: targetReducer
        }
    },
    updateItemByKey: (itemKey, newItemInfo, targetReducer) => {
        return {
            type: Ks.UPDATE_ITEM_BY_KEY,
            itemKey: itemKey,
            newItemInfo: newItemInfo,
            targetReducer: targetReducer
        }
    },
    removeItemByIndex: (index, targetReducer) => {
        return {
            type: Ks.REMOVE_ITEM_BY_INDEX,
            index: index,
            targetReducer: targetReducer
        }
    },
    removeItemBySn: (itemSn, targetReducer) => {
        return {
            type: Ks.REMOVE_ITEM_BY_SN,
            itemSn: itemSn,
            targetReducer: targetReducer
        }
    },
    removeItemByKey: (itemKey, targetReducer) => {
        return {
            type: Ks.REMOVE_ITEM_BY_KEY,
            itemKey: itemKey,
            targetReducer: targetReducer
        }
    },
    updateDetailByIndex: (index, newDetailInfo, targetReducer) => {
        return {
            type: Ks.UPDATE_DETAIL_BY_INDEX,
            index: index,
            newDetailInfo: newDetailInfo,
            targetReducer: targetReducer
        }
    },
    updateDetailBySn: (detailSn, newDetailInfo, targetReducer) => {
        return {
            type: Ks.UPDATE_DETAIL_BY_SN,
            detailSn: detailSn,
            newDetailInfo: newDetailInfo,
            targetReducer: targetReducer
        }
    },
    updateDetailByKey: (detailKey, newDetailInfo, targetReducer) => {
        return {
            type: Ks.UPDATE_DETAIL_BY_KEY,
            detailKey: detailKey,
            newDetailInfo: newDetailInfo,
            targetReducer: targetReducer
        }
    },
    assignGroupProps: (groupName, groupProperties, targetReducer) => {
        return {
            type: Ks.ASSIGN_GROUP_PROPS,
            groupName: groupName, // string
            groupProperties: groupProperties, // object
            targetReducer: targetReducer
        }
    },
    insertAttachment: (item, targetReducer) => {
        return {
            type: Ks.INSERT_ATTACHMENT,
            item: item,
            targetReducer: targetReducer
        }
    },
    removeAttachment: (item, index, targetReducer) => {
        return {
            type: Ks.REMOVE_ATTACHMENT,
            item,
            index,
            targetReducer
        }
    },
    fillFormAttach: (attachList, targetReducer) => {
        return {
            type: Ks.FILL_FORM_ATTACHMENT,
            attachList,
            targetReducer
        }
    },
    addPhrase: (name, value, targetReducer) =>{
        return{
            type: Ks.ADD_PHRASE,
            name,
            value,
            targetReducer
        }
    },
    addErrorMessage: (caption, message) => {
        return {
            type: Ks.ADD_ERROR_MESSAGE,
            payload: { caption, message },
        }
    },
    clearErrorMessage: () => {
        return {
            type: Ks.CLEAR_ERROR_MESSAGE
        }
    }

};
