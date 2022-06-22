import './important-todo.scss'

import TaskImportantItem from '../taskImportantItem/taskImportantItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectImportantTask } from '../../store/important/important.selector';
import { useEffect } from 'react';
import { selectCurrentUser } from '../../store/user/user.selector';
import { setImportantArray } from '../../store/important/important.action';
import { API_URL } from '../../httpRequest/taskRequest';

const ImportantToDo = () => {

    const {id} = useSelector(selectCurrentUser);
    const {importantArray} = useSelector(selectImportantTask);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchImportantData = async () => {
            try {
                const important = await fetch(`${API_URL}/myday/important/${id}`, {
                        method: 'get',
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then(response => response.json())
                    .catch(console.log)
                    
                    dispatch(setImportantArray(important));
                } catch(error) {
                    console.log(error)
                }
        }
        fetchImportantData();
    }, [])

    return (
        <div className="todo-important-container">
            {[].map((taskObj) => (
                <TaskImportantItem key={taskObj.taskId} taskObj={taskObj}/>
            ))}
        </div>
    )
}

export default ImportantToDo;