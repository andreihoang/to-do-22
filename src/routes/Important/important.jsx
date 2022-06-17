import { useState } from "react";

import './important.scss';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

import ImportantTaskInput from "../../components/importantTaskInput/taskinput";
import ImportantToDo from "../../components/important-todo/important-todo";


const Important = () => {
    const [dateState, setDateState] = useState(new Date());

    const changeDate = (e) => {
        setDateState(e);
    }

    return (
        <div className="important-container">

            {/* <Calendar value={dateState} onChange={changeDate}/>
            <p style={{color: 'white'}}>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p> */}
            <ImportantToDo />

            <ImportantTaskInput />

        </div>
    )
}  

export default Important;