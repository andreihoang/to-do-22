import './important-todo.scss'

import { useContext } from 'react';
import { ImportantContext } from '../../context/importantContext';
import TaskImportantItem from '../taskImportantItem/taskImportantItem';

const ImportantToDo = () => {

    const {importantArray} = useContext(ImportantContext);

    return (
        <div className="todo-important-container">
            {importantArray.map((taskObj) => (
                <TaskImportantItem key={taskObj.taskId} taskObj={taskObj}/>
            ))}
        </div>
    )
}

export default ImportantToDo;