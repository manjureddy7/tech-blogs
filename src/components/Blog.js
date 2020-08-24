import React from 'react';
import { Link } from "react-router-dom";

const Blog = (props) => {
    const { category } = props;
    return(
        <div>
            <Link to={`/blog/category/${category}`} style={{ textDecoration: 'none' }}>
                <h1 className="all-blogs-title">{category}</h1>
            </Link>
        </div>
    )
}


export default Blog;