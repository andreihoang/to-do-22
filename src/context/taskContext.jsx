import { createContext, useState, useEffect} from "react";

let taskId = 0;
const addTaskItemHelper = (tasksArray, taskItem) => {

    if (taskItem === '' || taskItem === null) {
        return tasksArray
    }

    return [...tasksArray, 
        {
            task: taskItem, 
            taskId: taskId++, 
            date: new Date(), 
            dueDate: null,
            isToggleCalendar: false,
            isComplete: false,
        }
    ]
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

// const filterTaskArrayHelper = () => {
//     return tasksArray.filter((task) => task.taskItem.include(search));
    
// }

export const TaskContext = createContext({
    tasksArray: [],
    taskItem: '',
    date: '',
    isToggleCalendar: false,
    search: '',
})

export const TaskProvider = ({children}) => {
    const [tasksArray, setTasksArray] = useState([]);
    const [taskItem, setTaskItem] = useState('');
    const [date, setDate] = useState(new Date());
    const [isToggleCalendar, setIsToggleCalendar] = useState(false);
    const [search, searchField] = useState('');
    const [tasksArrayFill, setTasksArrayFill] = useState([]);
    
    useEffect(() => {

        setTasksArrayFill(tasksArray);
    }, [tasksArray])
    

    useEffect(() => {
        const filter = tasksArray.filter((task) => task.task.includes(search));
        setTasksArrayFill(filter);
    }, [search, tasksArray])


    const reset = () => {
        setTaskItem('');
    }
    
    const addTaskItemToArray = () => {
        setTasksArray(addTaskItemHelper(tasksArray, taskItem));
        reset()
    }
    const renderDueDate = (targetTaskItem) => {
        const newTaskArray = renderDueDateHelper(date, tasksArray, targetTaskItem);
        setTasksArray(newTaskArray)
    };

    const markComplete = ( targetTaskItem ) => {
        const newTaskArray = isCompleteHelper(tasksArray, targetTaskItem)
        setTasksArray(newTaskArray);
    };

    const deleteTask = (targetTaskItem) => {
        const newTaskArray = deleteTaskHelper(tasksArray, targetTaskItem);
        setTasksArray(newTaskArray);
    }

  

    const value = {
        tasksArray,
        setTasksArray,
        setTaskItem,
        addTaskItemToArray,
        taskItem,
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