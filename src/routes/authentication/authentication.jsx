import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import  './authentication.scss'

const Authentication = () => {
    return (
        <div className="auth">
            <h1>Your To Do List</h1>
            <div className="authentication">
                <SignIn />
                <SignUp />
            </div>
        </div>
    )

}


export default Authentication;