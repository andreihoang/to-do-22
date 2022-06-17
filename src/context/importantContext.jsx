import { createContext, useState, useEffect} from "react";

let taskId = 1000;
const addTaskItemHelper = (tasksArray, taskItem) => {

    if (taskItem === null || taskItem === '') {
        return tasksArray
    }
    return [...tasksArray, {task: taskItem, taskId: taskId++}]
}


const addToImportantHelper = (importantArray, taskItemToAdd) => {
    const existingTask = importantArray.find((task) => task.taskId === taskItemToAdd.taskId);

    if (existingTask) {
        return importantArray.filter(task => task.taskId !== taskItemToAdd.taskId)
    }

    return [...importantArray, {...taskItemToAdd}];
}

const clearImportantItemHelper = (importantArray, taskItemClear) => {
    return importantArray.filter(task => task.taskId !== taskItemClear.taskId)
}
 
export const ImportantContext = createContext({
    importantArray: [],
    importantItem: '',
    importantCount: 0,
    isHeartFill: false
})

export const ImportantProvider = ({children}) => {

    const [importantArray, setImportantArray] = useState([]);
    const [importantItem, setImportantItem] = useState('');
    const [importantCount, setImportantCount] = useState(0);
    const [isHeartFill, setIsHeartFill] = useState(false);
    
    const reset = () => setImportantItem('')

    useEffect(() => {
        setImportantCount(importantArray.length)
    }, [importantArray])

    const addImportantTaskItem = () => {
        const newImportantTaskArray = addTaskItemHelper(importantArray, importantItem)
        setImportantArray(newImportantTaskArray);
        reset();
}
    const addToImportantArray = (taskItemToAdd) => {
        const newImportantArray = addToImportantHelper(importantArray, taskItemToAdd);
        setImportantArray(newImportantArray);
        
    }

    const clearImportantItem = (taskItemClear) => {
        const newImportantArray = clearImportantItemHelper(importantArray, taskItemClear);
        setImportantArray(newImportantArray);
    }

    
    const value = {
        importantArray,
        importantItem,
        importantCount,
        isHeartFill,
        setImportantItem,
        addToImportantArray,
        addImportantTaskItem,
        setIsHeartFill,
        clearImportantItem
    }
    return (
    <ImportantContext.Provider value={value}>{children}</ImportantContext.Provider>
    )
}