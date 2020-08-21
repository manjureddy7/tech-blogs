import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Time to setup pur store
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from './store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware()
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

