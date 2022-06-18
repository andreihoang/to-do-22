import { Link } from "react-router-dom";
import './home.scss'
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Home = () => {

    const {email} = useSelector(selectCurrentUser);
    

    return (
        <div className="home">
        <Link to="myday" className="menu-bars" >
            <span>Hi {email}</span>
            <h1>Let Add Task</h1>

        </Link>
        </div>
  
    );
  }
  
  export default Home;