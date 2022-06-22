
import './to-do.scss'
import { useEffect } from 'react';
import TaskItem from '../taskItemForm/taskItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTaskReducer } from '../../store/task/task.selector';
import { setTasksArrayFill } from '../../store/task/task.action';

const ToDo = () => {
    const dispatch = useDispatch();
    const {tasksArrayFill, tasksArray, search} = useSelector(selectTaskReducer);
    
    useEffect(() => {
        dispatch(setTasksArrayFill(tasksArray));
    }, [tasksArray]);

    useEffect(() => {
        const filter = tasksArray.filter((task) => task.task.includes(search));
        dispatch(setTasksArrayFill(filter));
    }, [search])

    return (
        <div className="todo-container">
            {tasksArrayFill.map((taskObj) => (
                <TaskItem key={taskObj.taskid} taskObj={taskObj}/>
            ))}
        </div>
    )
}

export default ToDo;