import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getPostsFromFirestore } from '../store/slices/blogs/blogsSlice';


const BlogList  = () => {

    const { error, msg, posts, loading } = useSelector(state =>  state.blogs);
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
                posts.length > 0 && posts.map(post => {
                    return(
                        <div key={post.id}>
                            <Link to={`/blog/${post.id}`}>
                                <h1 className="all-blogs-title" >{post.title}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogList;