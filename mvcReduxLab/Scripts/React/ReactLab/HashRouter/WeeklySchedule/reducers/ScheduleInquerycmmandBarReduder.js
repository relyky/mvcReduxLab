import actions, { Ks } from 'CommonFF/actions.js'

const initialState = {
    form_no: '', // new create
    form_mode: '', // { APPLY | REVIEW | REVIEWODP }
    view_only: false, // 
}

export default function cmmandBarReduder(state = initialState, action) {
    //console.log('formView1Reducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'cmmandBarReduder';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            return Object.assign({}, state, { [action.name]: action.value });
        case Ks.ASSIGN_STATE_PROPS:
            return Object.assign({}, state, action.properties);
        case Ks.SETUP_FROM_MODE:
            return Object.assign({}, state, action.formAttrs)
        default:
            return state;
    }
}
