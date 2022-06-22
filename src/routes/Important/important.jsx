import { useState } from "react";

import './important.scss';

import 'react-calendar/dist/Calendar.css';



import ImportantToDo from "../../components/important-todo/important-todo";


const Important = () => {
    
    return (
        <div className="important-container">
           
            <ImportantToDo />

        </div>
    )
}  

export default Important;