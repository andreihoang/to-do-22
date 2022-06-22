import {createAction} from '../../utils/reducer.utils';
import { IMPORTANT_ACTION_TYPES } from "./important.type";


const addToImportantHelper = (importantArray, taskItemToAdd) => {
    const existingTask = importantArray.find((task) => task.taskid === taskItemToAdd.taskid);

    if (existingTask) {
        return importantArray.filter(task => task.taskid !== taskItemToAdd.taskid)
    }

    return [...importantArray, {...taskItemToAdd}];
}

const fillHeartHelper = (importantArray, taskItemTarget) => {
    const existingTask = importantArray.find((task) => task.taskId === taskItemTarget.taskId);

    if (existingTask) {
        return importantArray.map(task => task.id === taskItemTarget.id ? {...task, isHeartFill: !task.isHeartFill} : task)
    } else {
        return false;
    }
}



export const addToImportantArray = (importantArray, taskItemToAdd) => {
    const newImportantTaskArray = addToImportantHelper(importantArray, taskItemToAdd);
    return createAction(IMPORTANT_ACTION_TYPES.SET_IMPORTANT_ARRAY, newImportantTaskArray);    
    
}

export const setIsHeartFill = (importantArray, taskItemTarget) => {
    const newImportantTaskArray = fillHeartHelper(importantArray, taskItemTarget)
    return  createAction(IMPORTANT_ACTION_TYPES.SET_IMPORTANT_ARRAY, newImportantTaskArray)
}


export const setImportantArray = (importantArray) => {  
    return createAction(IMPORTANT_ACTION_TYPES.SET_IMPORTANT_ARRAY, importantArray);    
}