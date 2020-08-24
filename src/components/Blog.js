import React from 'react';
import { Link } from "react-router-dom";

const Blog = (props) => {
    const { post } = props;
    return(
        <div key={post.id}>
            <Link to={`/blog/${post.category}`}>
                <h1 className="all-blogs-title" >{post.category.toUpperCase()}</h1>
            </Link>
        </div>
    )
}


export default Blog;