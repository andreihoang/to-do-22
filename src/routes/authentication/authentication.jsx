import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import  './authentication.scss'

const Authentication = () => {
    return (
        <div className="authentication">
            <SignIn />
            <SignUp />
        </div>
    )

}


export default Authentication;