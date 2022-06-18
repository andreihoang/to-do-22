
import {createAction }from '../../utils/reducer.utils';
import {TASK_ACTION_TYPES} from './task.type';


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

let taskId = 0;
const addTaskItemHelper = (tasksArray, taskItem) => {

    if (taskItem === '' || taskItem === null) {
        return tasksArray
    } else {

        return [...tasksArray, 
            {
                task: taskItem, 
                taskId: taskId++, 
                date: new Date(), 
                dueDateTask: null,
                isComplete: false,
            }
        ]
    }

}

const renderDueDateHelper = (date, tasksArray, targetTaskItem) => {
    const existingItem = tasksArray.find((task) => task.taskId === targetTaskItem.taskId);
    if (existingItem) {
        return tasksArray.map((task) => task.taskId === targetTaskItem.taskId ? {...task, dueDateTask: date.toDateString()} : task)
    }
    return false;
}

const isCompleteHelper = (tasksArray, targetTaskItem) => {
    const existingItem = tasksArray.find((task) => task.taskId === targetTaskItem.taskId);

    if (existingItem) {
        return tasksArray.map((task) => task.taskId === targetTaskItem.taskId ? {...task, isComplete: !task.isComplete} : task)
    }
    return false;
}

const deleteTaskHelper = (tasksArray, targetTaskItem) => {
    return tasksArray.filter(task => task.taskId !== targetTaskItem.taskId); 
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