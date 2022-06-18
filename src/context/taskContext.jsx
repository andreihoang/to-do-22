import { createContext, useState, useEffect, useReducer} from "react";
import {createAction} from '../utils/reducer.utils'

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
                dueDate: null,
                isComplete: false,
            }
        ]
    }

}

const renderDueDateHelper = (date, tasksArray, targetTaskItem) => {
    const existingItem = tasksArray.find((task) => task.taskId === targetTaskItem.taskId);
    if (existingItem) {
        return tasksArray.map((task) => task.taskId === targetTaskItem.taskId ? {...task, dueDate: date.toDateString()} : task)
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

export const TaskContext = createContext({
    tasksArray: [],
    date: '',
    isToggleCalendar: false,
    search: '',
    tasksArrayFill: []
})


const TASK_ACTION_TYPES = {
    SET_TASK_ARRAY: 'SET_TASK_ARRAY',
    SET_IS_TOGGLE_CALENDAR: 'SET_IS_TOGGLE_CALENDAR',
    SET_DATE: 'SET_DATE',
    SET_SEARCH_FIELD: 'SET_SEARCH_FIELD',
    SET_TASK_FILL: 'SET_TASK_FILL',
  };

const INITIAL_STATE = {
    tasksArray: [],
    date: new Date(),
    isToggleCalendar: false,
    search: '',
    tasksArrayFill: [],
}

const taskReducer = (state, action) => {
    const {type, payload} = action;
   
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
                date: payload,
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
            throw new Error('oh oh');
    }
}

export const TaskProvider = ({children}) => {

    const [{tasksArray, isToggleCalendar, date, search, tasksArrayFill}, dispatch] = useReducer(taskReducer, INITIAL_STATE);

    const setTasksArrayFill = (tasksArray) => {
        dispatch(createAction(TASK_ACTION_TYPES.SET_TASK_FILL, tasksArray))
    }
    
    useEffect(() => {
        setTasksArrayFill(tasksArray);
    }, [tasksArray])
    

    useEffect(() => {
        const filter = tasksArray.filter((task) => task.task.includes(search));
        setTasksArrayFill(filter);
    }, [search, tasksArray])

    const updateTasksArray = (tasksArray) => {

       dispatch(createAction(TASK_ACTION_TYPES.SET_TASK_ARRAY, tasksArray))
    }

    const addTaskItemToArray = (taskItem) => {
        const newTaskArray = addTaskItemHelper(tasksArray, taskItem);
        updateTasksArray(newTaskArray);  
    }
    const renderDueDate = (targetTaskItem) => {
        const newTaskArray = renderDueDateHelper(date, tasksArray, targetTaskItem);
        updateTasksArray(newTaskArray);
    };

    const markComplete = ( targetTaskItem ) => {
        const newTaskArray = isCompleteHelper(tasksArray, targetTaskItem)
        updateTasksArray(newTaskArray);
    };

    const deleteTask = (targetTaskItem) => {
        const newTaskArray = deleteTaskHelper(tasksArray, targetTaskItem);
        updateTasksArray(newTaskArray);
    }

  
    const setIsToggleCalendar = (bool) => {
        dispatch({type: TASK_ACTION_TYPES.SET_IS_TOGGLE_CALENDAR, payload: bool})
    } 

    const setDate = (date) => {
        dispatch(createAction(TASK_ACTION_TYPES.SET_DATE, date))
    } 

    const searchField = (search) => {
        dispatch(createAction(TASK_ACTION_TYPES.SET_SEARCH_FIELD,search))
    } 



    const value = {
        tasksArray,
        addTaskItemToArray,
        date, 
        setDate,
        isToggleCalendar,
        setIsToggleCalendar,
        renderDueDate,
        markComplete,
        deleteTask,
        searchField,
        tasksArrayFill
     }
    return (
    <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    )
}