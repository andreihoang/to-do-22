import { Link } from "react-router-dom";
import './home.scss'
const Home = () => {
    return (
        <div className="home">
        <Link to="myday" className="menu-bars" >
            <h1>Let Add Task</h1>

        </Link>
        </div>
  
    );
  }
  
  export default Home;