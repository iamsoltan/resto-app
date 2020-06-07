import { ADD_USER, GET_DISHES } from './types';
import Axios from 'axios';

/***********************add user action package*********************************** */

export const addUser2 = (user) => {
    const action = {
        type: ADD_USER,
        user,
    }
    console.log("action addUser2 called : ", action);
    return action;
}
export function addUser(x) {
    let z = { ...x };
    Object.keys(z).map(e => { z[e] = z[e].value });
    z = { ...z, cmdes_list: [] };
    console.log("user object : ", z);

    let y;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5edd2977655d87580c45ab65", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        y = [...res.data, z];
        /********************update database with new one*********************** */
        Axios.put("https://api.jsonbin.io/b/5edd2977655d87580c45ab65",
            y,
            {
                headers: {
                    'secret-key': "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou",
                    "versioning": "false",
                    "Content-Type": "application/json"
                }
            });
        dispatch(addUser2(z));
    }))
}
/***************************get dishes action package********************************** */
export const getDishesFromApi = (payload) => {
    const action = {
        type: GET_DISHES,
        payload
    }
    return action;
}

export function getDishes() {
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5ed8b2b52f5fd957fda3933e", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        dispatch(getDishesFromApi(res.data));
    }))
}