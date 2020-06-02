import { ADD_CMD } from '../actions/types';



const cmds = (state = [], action) => {
    let cmds = [];
    if (action.type === ADD_CMD) {
        cmds = [...state, { text: action.text,id : action.id }];
        console.log("reducer 1 called: ",cmds);
        return cmds
    }else {
        return state
    }
}

export default cmds;