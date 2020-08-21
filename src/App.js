import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Get required components
import { AddBlog, BlogLists, Home, SelectedBlog, ErrorBoundary } from './components'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="top-links">
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/add-blog'>Add Blog</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs"  component={BlogLists} />
          <Route path="/add-blog" component={AddBlog} />
          <Route path="/blog/:id" component={SelectedBlog} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
