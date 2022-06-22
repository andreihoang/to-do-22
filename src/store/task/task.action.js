
import {createAction }from '../../utils/reducer.utils';
import {TASK_ACTION_TYPES} from './task.type';

export const fetchTaskArray = (taskData) => {
    return createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, taskData);
} 

export const setIsToggleCalendar = (bool) => {
    return createAction(TASK_ACTION_TYPES.SET_IS_TOGGLE_CALENDAR, bool)
} 

export const setDate = (date) => {
    return createAction(TASK_ACTION_TYPES.SET_DATE, date)
} 

export const searchField = (search) => {
    return createAction(TASK_ACTION_TYPES.SET_SEARCH_FIELD, search)
} 

export const setTasksArrayFill = (tasksArray) => {
    return createAction(TASK_ACTION_TYPES.SET_TASK_FILL, tasksArray)
}


const addTaskItemHelper = (tasksArray, taskItem) => {

    if (taskItem === '' || taskItem === null) {
        return tasksArray
    } else {

        return [...tasksArray,  {...taskItem, date: taskItem.date}]
    }

}

const renderDueDateHelper = (tasksArray, targetTaskItem) => {
    const existingItem = tasksArray.find((task) => task.taskid === targetTaskItem.taskid);
    if (existingItem) {
        return tasksArray.map((task) => task.taskid === targetTaskItem.taskid ? {...task, duedate: targetTaskItem.duedate} : task)
    }
    return false;
}

const isCompleteHelper = (tasksArray, targetTaskItem) => {
    const existingItem = tasksArray.find((task) => task.taskid === targetTaskItem.taskid);

    if (existingItem) {
        return tasksArray.map((task) => task.taskid === targetTaskItem.taskid ? {...task, iscomplete: targetTaskItem.iscomplete} : task)
    }
    return false;
}

const fillHeartHelper = (tasksArray, taskItemTarget) => {
    const existingTask = tasksArray.find((task) => task.taskid === taskItemTarget.taskid);

    if (existingTask) {
        return tasksArray.map(task => task.taskid === taskItemTarget.taskid ? {...task, isheartfill: taskItemTarget.isheartfill} : task)
    } 
    return false;
    
}

export const setIsHeartFill = (tasksArray, taskItemTarget) => {
    const newTaskArray = fillHeartHelper(tasksArray, taskItemTarget)
    return  createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, newTaskArray)
}

const deleteTaskHelper = (tasksArray, targetTaskItem) => {
    return tasksArray.filter(task => task.taskid !== targetTaskItem.taskid); 
}


export const addTaskItemToArray = (tasksArray, taskItem) => {
    const newTaskArray = addTaskItemHelper(tasksArray, taskItem);
    return createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, newTaskArray);  
}
export const renderDueDate = (date, tasksArray, targetTaskItem) => {
    const newTaskArray = renderDueDateHelper(date, tasksArray, targetTaskItem);
    return createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, newTaskArray);
};

export const markComplete = (tasksArray, targetTaskItem ) => {
    const newTaskArray = isCompleteHelper(tasksArray, targetTaskItem)
    return createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, newTaskArray);
};

export const deleteTask = (tasksArray, targetTaskItem) => {
    const newTaskArray = deleteTaskHelper(tasksArray, targetTaskItem);
    return createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, newTaskArray);
}