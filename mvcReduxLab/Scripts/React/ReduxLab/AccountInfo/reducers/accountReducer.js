import { Ks } from 'CommonFF/actions.js'

const initialState = {
    name: '',
    email: '',
    mobilePhone: ''
}

export default function accountReducer(state = initialState, action) {
    //console.log('accountReducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'accountReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            /// action = { type, name, value }
            return { ...state, [action.name]: action.value }
        case Ks.ASSIGN_STATE_PROPS:
            /// action = { type, properties }
            return { ...state, ...(action.properties) }
        default:
            return state;
    }
}
