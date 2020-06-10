import * as types from '../actions/types';

const r_orders = (state = [], action) => {

    if (action.type === types.ADD_TO_CART) {
        return [...state, action.el]

    } else if (action.type === types.REMOVE_FROM_CART) {
        return state.filter(e => e.id !== action.id)

    } else {
        return state
    }
}

export default r_orders;