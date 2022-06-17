import { useState } from 'react';
import { useContext } from 'react';
import { ImportantContext } from '../../context/importantContext';
import { TaskContext } from '../../context/taskContext';




const ImportantTaskInput = () => {

    const {importantItem, addImportantTaskItem,  setImportantItem} = useContext(ImportantContext);
   

    
    const handdleSubmit = (e) => {
        e.preventDefault();
        addImportantTaskItem();
       
    }

    const handleChange = (event) => {
        setImportantItem(event.target.value);
    }

    return (
        <form onSubmit={handdleSubmit} className="task">
            <span onClick={() => addImportantTaskItem()} className='add-todo'>+</span>
            <input className="input" type='text' placeholder="Add a Task" name='task' value={importantItem} onChange={handleChange}/>
        </form>
    )
}

export default ImportantTaskInput;