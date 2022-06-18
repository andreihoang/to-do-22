import './myday.scss';
import Task from "../../components/Task/task";
import ToDo from '../../components/to-do.jsx/to-do';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/taskContext';
import Calendar from 'react-calendar'; 

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectTaskReducer } from '../../store/task/task.selector';
import { setDate } from '../../store/task/task.action';


const Myday = () => {
    const dispatch = useDispatch();
    const {isToggleCalendar} = useSelector(selectTaskReducer);
    const {dueDate} = useSelector(selectTaskReducer);

    const [dateChange, setDateChange] = useState(new Date());

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