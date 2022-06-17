import { useState } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';

import Calendar from 'react-calendar'; 

import './task.scss'


const Task = () => {

    const {
        taskItem ,
        setTaskItem, 
        addTaskItemToArray,
        
    } = useContext(TaskContext);
   
  
    const handdleSubmit = (e) => {
        e.preventDefault();
        addTaskItemToArray();
       
    }

    const handleChange = (event) => {
        setTaskItem(event.target.value);
    }

    return (
        <form onSubmit={handdleSubmit} className="task" autoComplete="off">
            <span onClick={() => addTaskItemToArray()} className='add-todo'>+</span>
            <input className="input" type='text' placeholder="Add a Task" name='task' value={taskItem} onChange={handleChange}/>
        </form>
    )
}

export default Task;