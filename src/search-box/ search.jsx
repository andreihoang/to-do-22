import { useContext } from "react"
import { TaskContext } from "../context/taskContext"

const SearchBox = () => {
    
    const {searchField, search} = useContext(TaskContext);

    const onChangeHandler = (e) => {
        searchField(e.target.value)
    }

    return (
        <>

        <input className='search-box' type='text' placeholder='Search' value={search}
            onChange={onChangeHandler}
        />
      
        </>
    )
}

export default SearchBox