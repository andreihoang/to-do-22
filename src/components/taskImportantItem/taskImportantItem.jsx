
const TaskImportantItem = ({taskObj}) => {
    
    const {task, date, duedate, iscomplete} = taskObj;
    const _date = new Date(date).toDateString()
    

    return (
    
        <div className="taskItem-container">
            <div className='taskItem-body'>

                <span className='complete-icon'>
                    <i  className={`${iscomplete ? 'fa fa-circle filled' : 'fa fa-circle'}`}></i>
                </span>
                <button className='button-task-container'>
                    <span className='task-word'>
                        {task}
                    </span>
                </button>
                <div className='mark-important'>
                    <span >
                        <i className='fa fa-heart fill'></i>
                    </span>
                </div>

                <div className="date-created">Created At: {_date}</div>


                <div className='due-date'>Due Date:  
                    <span>{duedate}</span>
                </div>
            </div>
        
        </div>
    )
}

export default TaskImportantItem;