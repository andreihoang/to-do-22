import { useState } from 'react';


import FormInput from "../form-input/form-input";
import './signin.scss'

import { useDispatch } from 'react-redux';
import { emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
    email: '',
    password: '',   
}

const SignIn = () => {
    
    const dispatch = useDispatch();
    const [formField, setFormField] =useState(defaultFormFields);
    const {email, password} = formField;
    

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value})
    }

    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
            dispatch(emailSignInStart(email, password));
    }


    return (
        <div className="sign-in-container">
            <h2>Let Sign In </h2>
            <span className="message">With Your Email and Password</span>
            <form >
                
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
                <div className='buttons-container'>

                    <button 
                        className='sign-in-button'
                        onClick={onSubmitHandler}
                    >Sign In</button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;