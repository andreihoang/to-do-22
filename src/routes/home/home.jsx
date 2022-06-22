import { Link } from "react-router-dom";
import './home.scss'
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/');
    }
 

    const {name, id} = useSelector(selectCurrentUser);

    return (
        
        
        <div className="home">
      
           { id ? (<Link to="myday" className="menu-bars" >
                <span>Hi {name}</span>
                <span>Let Add Task</span>

            </Link>) : (<div onClick={navigateHandler} className="menu-bars"> You must LOGIN first</div>)}
        
        </div> 
        

    );
  }
  
  export default Home;