
import { BG_ACTION_TYPES } from "./bg.type";

const INITIAL_STATE = {
    bgImage: 1,
}

export const bgReducer = (state=INITIAL_STATE, action={}) => {
    const {type, payload} = action;
   
    switch(type) {
        case BG_ACTION_TYPES.SET_BG:
            return {
                ...state,
                bgImage: payload,
            }
        default:
            return state;
        }
}