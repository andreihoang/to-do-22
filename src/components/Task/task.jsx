import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTaskItemToArray } from '../../store/task/task.action';
import { selectTaskReducer } from '../../store/task/task.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { API_URL } from '../../httpRequest/taskRequest';

import './task.scss'


const Task = () => {
    const [taskItem, setTaskItem] = useState('');
    const dispatch = useDispatch();
    const {tasksArray} = useSelector(selectTaskReducer);
    const {dueDate} = useSelector(selectTaskReducer);
    const {id} = useSelector(selectCurrentUser);


    const httpSubmitTask = async () => {
        try {
            const response = await fetch(`${API_URL}/myday`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    task: taskItem,  
                    dueDate: dueDate.toDateString(),
                    isComplete: false,
                    isHeartFill: false,
                    userId: id,
                    date: new Date()
                })
            })
            .then(response => response.json())
            .catch(console.log);
                
            return response;
        } catch(error) {
            console.log('Cannot Post Task');
        }
    }

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await httpSubmitTask();
        
        dispatch(addTaskItemToArray(tasksArray, response));
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