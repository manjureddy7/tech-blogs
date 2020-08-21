import { combineReducers } from "@reduxjs/toolkit";

import blogReducer from './slices/blogs/blogsSlice';

export const rootReducer = combineReducers({ blogs: blogReducer})


export default rootReducer;