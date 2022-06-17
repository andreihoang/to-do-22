
import './to-do.scss'

import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';
import TaskItem from '../taskItemForm/taskItem';

const ToDo = () => {

    const {tasksArrayFill} = useContext(TaskContext);

    return (
        <div className="todo-container">
            {tasksArrayFill.map((taskObj) => (
                <TaskItem key={taskObj.taskId} taskObj={taskObj}/>
            ))}
        </div>
    )
}

export default ToDo;