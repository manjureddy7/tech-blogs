import React, { useEffect } from 'react';
import Blog from './Blog';

import { useSelector, useDispatch } from "react-redux";
import { getPostsFromFirestore } from '../store/slices/blogs/blogsSlice';


const BlogList  = () => {

    const { posts, loading } = useSelector(state =>  state.blogs);
    const categoryPosts = [...new Set(posts.map(post => post.category))];
    const dispatch = useDispatch();

    // Load all the posts for the first time
    useEffect(()=> {
        dispatch(getPostsFromFirestore())
    }, [dispatch]);

    return(
        <div className="all-blogs">
            <h1 className="all-blogs-heading">All your Blogs...</h1>
            {loading && <div>Fetching all your blogs...</div>}
            <div className="category-cards">
                {
                    categoryPosts.length > 0 && categoryPosts.map(category => (
                        <div className="category-card" key={category}>
                            <Blog category={category}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList;