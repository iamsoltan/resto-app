import * as types from './types';
import Axios from 'axios';


/*********************** get Orders*********************************** */
export const getOrders2 = (payload) => {
    console.log("GET_ORDERS called ", payload);
    
    const action = {
        type: types.GET_ORDERS,
        payload,
    }
    return action;
}

export function getOrders() {

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ee665d20e966a7aa3694954", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        y = [...res.data ];
        dispatch(getOrders2(y));
    }))
}

