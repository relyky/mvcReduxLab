import actions, { Ks } from './actions.js';

const initialState = {
    recUnit: '', // 受理單位
}

const formView1Reducer = (state = initialState, action) => {
    //console.log('formView1Reducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'formView1Reducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            return Object.assign({}, state, { [action.name]: action.value });
        case Ks.ASSIGN_FROM_DATA_1:
            return Object.assign({}, state, action.formData1);
        default:
            return state;
    }
}

export default formView1Reducer;
