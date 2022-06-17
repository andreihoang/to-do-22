

import { useContext, useState } from 'react';
import { ImportantContext } from '../../context/importantContext';




const TaskImportantItem = ({taskObj}) => {

    const {clearImportantItem} = useContext(ImportantContext);
    
    const {task, date, dueDate, isComplete} = taskObj;

    const handleClearImportantItem = () => clearImportantItem(taskObj)
    

    return (
    
        <div className="taskItem-container">
            <div className='taskItem-body'>

                <span className='complete-icon'>
                    <i className="fa fa-circle"></i>
                </span>
                <button className='button-task-container'>
                    <span className='task-word'>
                        {task}
                    </span>
                </button>
                <div className='mark-important'>
                    <span onClick={handleClearImportantItem}>
                        <i className='fa fa-heart fill'></i>
                    </span>
                </div>

                {/* <div className="date-created">Created At: {date.toDateString()}</div>


                <div className='due-date'>Due Date:  
                    <span>{dueDate}</span>
                </div> */}
            </div>
        
        </div>
    )
}

export default TaskImportantItem;