﻿import { Ks } from 'CommonFF/actions.js'

const initialState = {
    likeCount: 0,
    dislikeCount: 0
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
        case 'INCREASE_LIKE':
            return { ...state, likeCount: state.likeCount + 1 }
        case 'INCREASE_DISLIKE':
            return { ...state, dislikeCount: state.dislikeCount + 1 }
        default:
            return state;
    }
}
