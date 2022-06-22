import './myday.scss';
import Task from "../../components/Task/task";
import ToDo from '../../components/to-do.jsx/to-do';
import { useEffect, useState } from 'react';

import Calendar from 'react-calendar'; 

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTaskReducer } from '../../store/task/task.selector';
import { setDate } from '../../store/task/task.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { fetchTaskArray } from '../../store/task/task.action';
import { API_URL } from '../../httpRequest/taskRequest';
const Myday = () => {
    const dispatch = useDispatch();
    const {isToggleCalendar} = useSelector(selectTaskReducer);
    
    const {id} = useSelector(selectCurrentUser)

    const [dateChange, setDateChange] = useState(new Date());

    // get tasks
    useEffect(() => {
        async function fetchData() {
            try {
                const taskData = await fetch(`${API_URL}/myday/${id}`, {
                method: 'get',
                headers: {'Content-Type': 'application/json'},
                })
                .then(response => response.json())
                .catch(err => undefined)
                if (taskData) {

                    dispatch(fetchTaskArray(taskData));
                }
            } catch(error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(setDate(dateChange))
    }, [dateChange])

    return (
        <div className="myday-container" >
           
            <ToDo />
            <Task />
            <div className={`${isToggleCalendar ? 'menu-bar' : null}`}>
                {isToggleCalendar && <h2 className='calendar-title'>CANLENDAR</h2>}
                    {isToggleCalendar && <Calendar className="calendar" onChange={setDateChange} value={dateChange}/>}
                
            </div>
        </div>
    )
}  

export default Myday;