import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const ProtectedRoute = (props) => {
    const Component = props.component;
    const userState = useSelector(state => state.auth.isLoggedIn);
    return userState ? <Component /> : <Redirect to="/" />
}

export default ProtectedRoute;