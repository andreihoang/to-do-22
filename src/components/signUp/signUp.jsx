import FormInput from "../form-input/form-input";
import './signup.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";
import { httpSignUp } from "../../httpRequest/request";

import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',   
    confirmedPassword: '',
}

const SignUp = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/');
    }
    const dispatch = useDispatch();
    const [formField, setFormField] =useState(defaultFormFields);
    const {displayName, email, password, confirmedPassword} = formField;


    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (password === confirmedPassword) {
            dispatch(signUpStart(displayName, email, password));
        } else {
            alert('Password Not Match')
        }

    }

    return (
        <div className="sign-up-container">
            <h2>Let Sign Up</h2>
            <span className="message">With Your Email and Password</span>
            <form >
                
                <FormInput
                    label='Display Name'
                    type="text"
                    name="displayName"
                    value={displayName}
                    required
                    onChange={onChangeHandler}
                />
                
                <FormInput
                    label='Email'
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={onChangeHandler}

                />
             
                <FormInput
                        label='Password'
                        type="password"
                       name="password"
                       value={password}
                       required
                       onChange={onChangeHandler}
                />
               
                <FormInput
                        label='Password Confirmed'
                        type="password"
                       name="confirmedPassword"
                       value={confirmedPassword}
                       required
                       onChange={onChangeHandler}
                />  
                <button onClick={onSubmitHandler} className='sign-up-button'>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp;