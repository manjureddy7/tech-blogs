import React from 'react';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogCategory = (props) => {

    const { posts } = useSelector(state =>  state.blogs);
    const { category } = props.match.params;
    const postsList = posts.filter(post => post.category === category)
    return(
        <div>
            {
                postsList.map(post => {
                    return(
                        <div key={post.id} className="blog-title">
                            <Link to={`/blog/posts/${post.id}`} style={{ textDecoration: 'none' }}>
                                <div className="all-blogs-title">{post.title}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BlogCategory;