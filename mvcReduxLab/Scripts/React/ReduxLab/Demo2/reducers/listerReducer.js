import { Ks } from 'CommonFF/actions.js'

/// itemList
//const initialState = ['Apple', 'Samsung', 'Sony', 'ASUS']

const initialState = [
    { name: 'Apple', count: 0 },
    { name: 'Samsung', count: 0 },
    { name: 'Sony', count: 0 },
    { name: 'ASUS', count: 0 }
]

export default function listerReducer(state = initialState, action) {
    //console.log('listerReducer', state, action)
    const match = action.targetReducer === undefined ||
        action.targetReducer === null ||
        action.targetReducer === 'listerReducer';

    if (!match) return state;

    switch (action.type) {
        case Ks.INSERT_ITEM:
        { 
            const itemList = state.slice()
            itemList.push(action.payload)
            return itemList
        }
        case Ks.UPDATE_ITEM:
        {
            const itemList = state.slice()
            itemList[action.index] = action.payload
            return itemList
        }
        case Ks.REMOVE_ITEM:
        {
            const itemList = state.slice()
            itemList.splice(action.index, 1)
            return itemList
        }
        default:
            return state;
    }
}
