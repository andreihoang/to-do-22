
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchField } from "../store/task/task.action";
import { selectTaskReducer } from "../store/task/task.selector";

const SearchBox = () => {
    const dispatch = useDispatch();
    const {search} = useSelector(selectTaskReducer)

    const onChangeHandler = (e) => {
        dispatch(searchField(e.target.value))
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