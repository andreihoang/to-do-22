import { IMPORTANT_ACTION_TYPES } from "./important.type";

const INITIAL_STATE = {
    importantArray: [],
    importantCount: 0,
}


export const importantReducer = (state=INITIAL_STATE, action={}) => {
    const {type, payload} = action;

    switch(type) {
        case IMPORTANT_ACTION_TYPES.SET_IMPORTANT_ARRAY:
            return {
                ...state,
                importantArray: payload
            }    
        default:
            return state;
    }
}