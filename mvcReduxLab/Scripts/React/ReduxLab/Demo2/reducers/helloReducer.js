import { Ks } from 'CommonFF/actions.js'

const initialState = {
    hello: 'Hi, I come from reducer'
}

export default function helloReducer(state = initialState, action) {
    //console.log('helloReducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'helloReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            return { ...state, [action.name]: action.value }
        case Ks.ASSIGN_STATE_PROPS:
            return { ...state, ...(action.properties) }
        default:
            return state;
    }
}
