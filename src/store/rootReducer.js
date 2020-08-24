import { combineReducers } from "@reduxjs/toolkit";

import blogReducer from './slices/blogs/blogsSlice';
import authReducer from './slices/auth/authSplice';

export const rootReducer = combineReducers({ blogs: blogReducer, auth: authReducer})


export default rootReducer;