
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTaskReducer } from '../../store/task/task.selector';
import { setIsToggleCalendar } from '../../store/task/task.action';
import { renderDueDate } from '../../store/task/task.action';
import { markComplete } from '../../store/task/task.action';
import { deleteTask } from '../../store/task/task.action';
import './taskItem.scss';

import useSound from 'use-sound';
import sound from '../../assets/sound.mp3'

import { addToImportantArray } from '../../store/important/important.action';
import { selectImportantTask } from '../../store/important/important.selector';
import { setIsHeartFill } from '../../store/task/task.action';
import { selectCurrentUser } from '../../store/user/user.selector';

import { httpFillHeart, httpDueDate, httpMarkComplete, httpDeleteTask } from '../../httpRequest/taskRequest';

const TaskItem = ({taskObj}) => {
    const [play] = useSound(sound);
    const dispatch = useDispatch();
    const {isToggleCalendar, tasksArray, dueDate} = useSelector(selectTaskReducer)
    const {importantArray} = useSelector(selectImportantTask)
    const {id} = useSelector(selectCurrentUser);
    
    const {taskid, task, date, duedate, iscomplete, isheartfill} = taskObj;

    const fillHeart = async () => {
        try {
            const task = await httpFillHeart(id, taskid, isheartfill);
            dispatch(setIsHeartFill(tasksArray, task));
            dispatch(addToImportantArray(importantArray, task));
            
        } catch(error) {
            console.error(error);
        }
    };



    const handleToggleCalendar = () => {dispatch(setIsToggleCalendar(!isToggleCalendar))};


    const handleDueDate = async () => {
        try {
            const task = await httpDueDate(id, taskid, dueDate);
            dispatch(renderDueDate(tasksArray, task));
        } catch(error) {
            console.error(error);
        }
    };

    const handleMarkComplete = async () => {
            try {
                const task = await httpMarkComplete(id, taskid, iscomplete)
                dispatch(markComplete(tasksArray, task))
                play()
            } catch(error) {
                console.error(error);
            }
        }
    

    const handleDeleteTask = async () => {
            try {
                await httpDeleteTask(id, taskid);
                   
                } catch(error) {
                    console.error(error);
                }
            dispatch(deleteTask(tasksArray, taskObj))
    };

    return (
    
        <div className="taskItem-container">
            <div className='taskItem-body'>

                <span className='complete-icon'  title='mark as complete'>
                    <i  onClick={handleMarkComplete} className={`${iscomplete ? 'fa fa-circle filled' : 'fa fa-circle'}`}></i>
                </span>
                <span className='complete-icon' title='delete task' >
                    <i onClick={handleDeleteTask} className={`${iscomplete ? 'fa fa-trash' : ''}`}></i>
                </span>
                <button className='button-task-container' onClick={handleToggleCalendar}>
                    <span className={`${iscomplete ? 'task-word line-fill' : 'task-word'}`}>
                        {task}
                    </span>
                </button>
                <div className='mark-important'>
                    <span>
                        <i onClick={fillHeart} className={`${isheartfill ? 'fa fa-heart fill' : 'fa fa-heart'}`} title='Mark As Important'></i>
                    </span>
                </div>
                <div className="date-created">Created At: {date}</div>


                <div onClick={handleToggleCalendar} className='due-date'>Due Date:  
                    <span > {duedate}</span>
                </div>               

            </div>
                <div onClick={handleToggleCalendar}>

                   <button className='button-due-date' onClick={handleDueDate}>Set Due Date</button>
                </div>
        
        </div>
    )
}

export default TaskItem;

