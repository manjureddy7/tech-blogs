import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {  Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const userState = useSelector(state => state.auth.isLoggedIn);
    return (
        <Route
          {...rest}
          render={(props) => userState
            ? <Component {...props} />
            : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
        />
      )
}

export default ProtectedRoute;



// If we use below approach we cant get history prop to any of the rendered comp
// so we need to pass {...rest} & render props to ROUTE comp

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';


// const ProtectedRoute = (props) => {
//     console.log("props are", props)
//     const Component = props.component;
//     const userState = useSelector(state => state.auth.isLoggedIn);
//     return userState ? <Component {...props}/> : <Redirect to="/" />
// }

// export default ProtectedRoute;