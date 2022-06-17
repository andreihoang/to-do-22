import { useContext, useState } from 'react';
import { ImportantContext } from '../../context/importantContext';
import { TaskContext } from '../../context/taskContext';

import './taskItem.scss'


const TaskItem = ({taskObj}) => {

    const {addToImportantArray} = useContext(ImportantContext);
    const {isToggleCalendar ,setIsToggleCalendar, renderDueDate, markComplete, deleteTask} = useContext(TaskContext);
    
    const {task, date, dueDate, isComplete} = taskObj;
    

    const [isHeartFill, setIsHeartFill] = useState(false);

    const fillHeart = () => setIsHeartFill(!isHeartFill);

    const handleAddToImportantArray = () => {
        addToImportantArray(taskObj);
    };

    const handleToggleCalendar = () => setIsToggleCalendar(!isToggleCalendar);

    const handleDueDate = () => {
       
        renderDueDate(taskObj)
    };

    const handleMarkComplete = () => markComplete(taskObj);

    const handleDeleteTask = () => deleteTask(taskObj);

    return (
    
        <div className="taskItem-container">
            <div className='taskItem-body'>

                <span className='complete-icon'  title='mark as complete'>
                    <i  onClick={handleMarkComplete} className={`${isComplete ? 'fa fa-circle filled' : 'fa fa-circle'}`}></i>
                </span>
                <span className='complete-icon' title='delete task' onClick={handleDeleteTask}>
                    <i  className={`${isComplete ? 'fa fa-trash' : ''}`}></i>
                </span>
                <button className='button-task-container' onClick={handleToggleCalendar}>
                    <span className={`${isComplete ? 'task-word line-fill' : 'task-word'}`}>
                        {task}
                    </span>
                </button>
                <div className='mark-important'>
                    <span onClick={handleAddToImportantArray}>
                        <i onClick={fillHeart} className={`${isHeartFill ? 'fa fa-heart fill' : 'fa fa-heart'}`} title='Mark As Important'></i>
                    </span>
                </div>
                <div className="date-created">Created At: {date.toDateString()}</div>


                <div className='due-date'>Due Date:  
                    <span onClick={handleToggleCalendar}> {dueDate}</span>
                </div>
                


            </div>
                <div onClick={handleToggleCalendar}>

                   <button className='button-due-date' onClick={handleDueDate}>Set Due Date</button>
                </div>
        
        </div>
    )
}

export default TaskItem;

