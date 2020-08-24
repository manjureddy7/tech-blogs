import React, { useEffect } from 'react';
import Blog from './Blog';

import { useSelector, useDispatch } from "react-redux";
import { getPostsFromFirestore } from '../store/slices/blogs/blogsSlice';


const BlogList  = () => {

    const { posts, loading } = useSelector(state =>  state.blogs);
    const dispatch = useDispatch();

    // Load all the posts for the first time
    useEffect(()=> {
        dispatch(getPostsFromFirestore())
    }, []);

    return(
        <div className="all-blogs">
            <h1 className="all-blogs-heading">All your Blogs...</h1>
            {loading && <div>Fetching all your blogs...</div>}
            {
                posts.length > 0 && posts.map(post => (
                    <Blog post={post} key={post.id}/>
                ))
            }
        </div>
    )
}

export default BlogList;