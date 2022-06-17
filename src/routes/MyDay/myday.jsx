import './myday.scss'
import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';
import Calendar from 'react-calendar'; 


import Task from "../../components/Task/task";
import ToDo from '../../components/to-do.jsx/to-do';



const Myday = () => {
    const {isToggleCalendar} = useContext(TaskContext)

    const {date, setDate} = useContext(TaskContext);
   

    return (
        <div className="myday-container" >
           
            <ToDo />
            <Task />
            <div className={`${isToggleCalendar ? 'menu-bar' : null}`}>
                {isToggleCalendar && <h2 className='calendar-title'>CANLENDAR</h2>}
                    {isToggleCalendar && <Calendar className="calendar" onChange={setDate} value={date}/>}
                
            </div>
        </div>
    )
}  

export default Myday;