import { useContext, useState } from 'react';
import { ImportantContext } from '../../context/importantContext';
import { TaskContext } from '../../context/taskContext';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTaskReducer } from '../../store/task/task.selector';
import { setIsToggleCalendar } from '../../store/task/task.action';
import { renderDueDate } from '../../store/task/task.action';
import { markComplete } from '../../store/task/task.action';
import { deleteTask } from '../../store/task/task.action';
import './taskItem.scss'


const TaskItem = ({taskObj}) => {
    const dispatch = useDispatch();
    const {isToggleCalendar, tasksArray, dueDate} = useSelector(selectTaskReducer)
    const {addToImportantArray} = useContext(ImportantContext);
   
    
    const {task, date, dueDateTask, isComplete} = taskObj;

    const [isHeartFill, setIsHeartFill] = useState(false);

    const fillHeart = () => setIsHeartFill(!isHeartFill);

    const handleAddToImportantArray = () => {
        addToImportantArray(taskObj);
    };

    const handleToggleCalendar = () => {dispatch(setIsToggleCalendar(!isToggleCalendar))};


    const handleDueDate = () => {
        dispatch(renderDueDate(dueDate, tasksArray, taskObj));
        console.log('duedate ',dueDate);
    };

    const handleMarkComplete = () => {dispatch(markComplete(tasksArray, taskObj))};

    const handleDeleteTask = () => dispatch(deleteTask(tasksArray, taskObj));

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


                <div onClick={handleToggleCalendar} className='due-date'>Due Date:  
                    <span > {dueDateTask}</span>
                </div>               

            </div>
                <div onClick={handleToggleCalendar}>

                   <button className='button-due-date' onClick={handleDueDate}>Set Due Date</button>
                </div>
        
        </div>
    )
}

export default TaskItem;

