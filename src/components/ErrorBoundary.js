import React from 'react';
import { Redirect } from 'react-router-dom';


class ErrorBoundary extends React.Component {

    constructor(props) {
      super(props);
       this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error) {
        if(error) {
           return <Redirect to="/" />
        }
    }
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>
      }
      return this.props.children; 
    }
}

export default ErrorBoundary;