import React, {useState} from 'react';
import { handleLoginWithFirebase } from '../store/slices/auth/authSplice';
import { useDispatch } from 'react-redux'

const Login  = (props) => {

    const [userState, setUserState] = useState({email: '', password: ''});
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { target: {value}} = e;
        setUserState({...userState, [e.target.name]: value})
    }
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(handleLoginWithFirebase(userState.email, userState.password));
        props.history.push('/');
    }
    return(
        <>
            <form onSubmit={handleLogin} className="login-form">
                <div className="email-section">
                    <label>Email:</label>
                    <input 
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="password-section">
                    <label>Password: </label>
                    <input 
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleInputChange}
                    />
                </div>
                <button className="login-btn">Login</button>
            </form>
        </>
    )
}

export default Login;