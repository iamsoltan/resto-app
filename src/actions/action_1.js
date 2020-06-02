import {ADD_CMD} from './types';

let Xid=0;
export const Add_Cmd = (text) => {
    const action = {
        type:ADD_CMD,
        text,
        id:Xid+=1,
    }
    console.log("action 1 called : ",action);
    
    return action;
}