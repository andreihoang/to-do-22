
import { USER_ACTION_TYPES } from "./user.type";

const INNITIAL_STATE = {
    currentUser: {}, error: null,
}

export const userReducer = (state=INNITIAL_STATE , action) => {
    const {type, payload} = action;
  
    switch(type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
            ...state, currentUser: payload
            }
        case USER_ACTION_TYPES.SIGN_IN_FALIURE:
            return {
                ...state, error: payload
            }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state, currentUser: {}
            } 
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return {
                ...state, error: payload
            } 
        default:
            return state;          
    }
} 
