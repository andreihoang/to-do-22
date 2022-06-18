
import { USER_ACTION_TYPES } from "./user.type";

const INNITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state=INNITIAL_STATE , action) => {
    const {type, payload} = action;
    console.log(action)
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
            ...state, currentUser: payload
            }
        default:
            return state;          
    }
} 
