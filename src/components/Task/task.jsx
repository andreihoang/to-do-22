import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTaskItemToArray } from '../../store/task/task.action';
import { selectTaskReducer } from '../../store/task/task.selector';

import './task.scss'


const Task = () => {
    const [taskItem, setTaskItem] = useState('');
    const dispatch = useDispatch();
    const {tasksArray} = useSelector(selectTaskReducer);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTaskItemToArray(tasksArray, taskItem));
        setTaskItem('');
    }

    const handleChange = (event) => {
        setTaskItem(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="task" autoComplete="off">
            <span  className='add-todo'>+</span>
            <input className="input" type='text' placeholder="Add a Task" name='task' value={taskItem} onChange={handleChange}/>
        </form>
    )
}

export default Task;