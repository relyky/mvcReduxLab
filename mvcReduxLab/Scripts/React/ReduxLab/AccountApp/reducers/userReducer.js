import { Ks } from 'CommonFF/actions.js'

const initialState = {
    birthday: '',
    contactTime: '',
    remark: ''
}

export default function userReducer(state = initialState, action) {
    //console.log('userReducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'userReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            /// action = { type, name, value }
            return { ...state, [action.name]: action.value }
        case Ks.ASSIGN_STATE_PROPS:
            /// action = { type, properties }
            return { ...state, ...(action.properties) }
        case Ks.FILL_FORM_DATA:
            /// action = { type, formData }
            return { ...state, ...(action.formData.userInfo) }
        default:
            return state;
    }
}
