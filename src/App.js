import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Get required components
import { AddBlog, BlogLists, Home, SelectedBlog, ErrorBoundary, Login, ProtectedRoute } from './components';

import { auth } from './firebase/firebase';
import { onAuthStateChange, handleLogoutWithFirebase } from './store/slices/auth/authSplice';
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const [user,setUser] = useState(null)

  auth.onAuthStateChanged(authUser => {
    if(authUser) {
      setUser(authUser)
      dispatch(onAuthStateChange({userData: "Yuppp"}));
    } else {
      setUser(null)
    }
  });

  const handleSingout = () => {
    setUser(null);
    dispatch(handleLogoutWithFirebase());
  }

  const renderLinks = () => {
    if(user) {
      return(
        <div className="top-links">
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/add-blog'>Add Blog</Link>
            <button onClick={handleSingout} className="signout-btn">Singout</button>
        </div>
      )
    } else {
     return(
      <div className="top-links">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </div>
     )
    }
  }
  return (
    <ErrorBoundary>
      <Router>
        <div>
            {renderLinks()}
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/blogs"  component={BlogLists} />
          <ProtectedRoute path="/add-blog" component={AddBlog} />
          <ProtectedRoute path="/blog/:category" component={SelectedBlog} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
