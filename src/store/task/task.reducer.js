import { TASK_ACTION_TYPES } from "./task.type";

const INITIAL_STATE = {
    tasksArray: [],
    dueDate: new Date(),
    isToggleCalendar: false,
    search: '',
    tasksArrayFill: [],
}

export const taskReducer = (state=INITIAL_STATE, action={}) => {
    const {type, payload} = action;
    console.log(action)
    switch(type) {
        case TASK_ACTION_TYPES.SET_TASK_ARRAY:
            return {
                ...state,
                tasksArray: payload
            }
        case TASK_ACTION_TYPES.SET_IS_TOGGLE_CALENDAR:
            return {
                ...state,
                isToggleCalendar: payload,
            }
        case TASK_ACTION_TYPES.SET_DATE:
            return {
                ...state,
                dueDate: payload,
            }
        case TASK_ACTION_TYPES.SET_SEARCH_FIELD:
            return {
                ...state,
                search: payload,
            } 
        case TASK_ACTION_TYPES.SET_TASK_FILL:
            return {
                ...state,
                tasksArrayFill: payload,
            }   
        default:
            return state;
    }
}