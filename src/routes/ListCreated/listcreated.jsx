import './listcreated.scss'
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { NewListContext } from '../../context/newList.context';

const ListCreated = () => {

    const {id} = useParams();

    const {setNewListName, addNewListArray, newListName} =useContext(NewListContext)

    const handleChange = (e) => {
        setNewListName(e.target.value);
    } 

    const handleAddNewListArray = (e) => {
        e.preventDefault();
        addNewListArray()
    };

    return (
        <form className="list-create-container" onSubmit={handleAddNewListArray}>
            <input type="text" value={newListName} onChange={handleChange}/>
        </form>
    )
}

export default ListCreated;
