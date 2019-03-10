import { Ks } from 'CommonFF/actions.js'

const initialState = {
    count: 0,
    num: 3, 
}

export default function counterReducer(state = initialState, action) 
{
    //console.log('formView1Reducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'counterReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.ASSIGN_VALUE:
            return { ...state, [action.name]: action.value }
            //return Object.assign({}, state, { [action.name]: action.value });
        case Ks.ASSIGN_STATE_PROPS:
            return { ...state, ...(action.properties) }
        case 'INCREASE_COUNT':
            return { ...state, count: state.count + 1 }
        case 'DECREASE_COUNT':
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}
