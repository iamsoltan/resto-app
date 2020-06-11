import * as types from './types';
import Axios from 'axios';


/***********************register user action package*********************************** */

export const registerUser2 = (user) => {
    const action = {
        type: types.REGISTER_USER,
        user,
    }
    console.log("action addUser2 called : ", action);
    return action;
}
export function registerUser(x) {
    let z = { ...x };
    Object.keys(z).map(e => { z[e] = z[e].value });
    z = { ...z, role: "user", cmdes_list: [] };
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
        dispatch(registerUser2(z));
    }))
}
/***********************login user action package*********************************** */
export const loginUser2 = (user) => {
    const action = {
        type: types.LOGIN_USER,
        user,
    }
    console.log("action loginUser2 called : ", action);
    return action;
}

export function loginUser(x, y) {
    let a;
    return ((dispatch) => Axios.get("https://api.jsonbin.io/b/5edd2977655d87580c45ab65", {
        headers: {
            "secret-key": "$2b$10$5ezr.oHY3Mqsd0gwv19NQ.B8Bs9.ilzJ.4B6mz.jVsFhDD1tmeAou"
        }
    }).then(res => {
        let z = [...res.data]
        a = z.find(e => ((e.email === x) && (e.password === y)));
        console.log("email: ", x, " password : ", y);

        dispatch(loginUser2(a));
    }))
}
/***********************logout user action package*********************************** */

export const logoutUser = () => {
    const action = {
        type: types.LOGOUT_USER,
        user: "none"
    }
    console.log("action LOGOUT_USER called : ", action);
    return action;
}