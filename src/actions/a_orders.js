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
    console.log("action REMOVE_FROM_CART called : ", action);
    return action;
}
/***********************set quantity action package*********************************** */

export const setQuantity = (id,quantity) => {
    const action = {
        type: types.SET_QUANTITY,
        id,
        quantity
    }
    console.log("action SET_QUANTITY called : ", action);
    return action;
}

/*********************** post order action package*********************************** */
export const sendOrder = (order) => {
    console.log("send order ", order);
    
    const action = {
        type: types.SEND_ORDER,
        order,
    }
    console.log("action addUser2 called : ", action);
    return action;
}

// export function sendOrder2(x) {



//     let y;
//     return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee27b7e655d87580c484cea", {
//         headers: {
//             "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
//         }
//     }).then(res => {
//         y = [...res.data, z];
//         /********************update database with new one*********************** */
//         Axios.put("https://api.jsonbin.io/b/5ee27b7e655d87580c484cea",
//             y,
//             {
//                 headers: {
//                     'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
//                     "versioning": "false",
//                     "Content-Type": "application/json"
//                 }
//             });
//         dispatch(registerUser2(z));
//     }))
// }