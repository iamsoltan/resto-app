import * as types from './types';
import Axios from 'axios';

export const getDishesFromApi = (payload) => {
    const action = {
        type: types.GET_DISHES,
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