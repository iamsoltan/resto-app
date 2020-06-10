import * as types from './types';
import Axios from 'axios';

/***********************add to cart action package*********************************** */

export const addToCart = (element) => {
    const action = {
        type: types.ADD_TO_CART,
        el: element
    }
    console.log("action ADD_TO_CART called : ", action);
    return action;
}
/***********************remove from cart action package*********************************** */

export const removeFromCart = (id) => {
    const action = {
        type: types.REMOVE_FROM_CART,
        id
    }
    console.log("action ADD_TO_CART called : ", action);
    return action;
}
