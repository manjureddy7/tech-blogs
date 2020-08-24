import React from 'react';
import { Link } from "react-router-dom";
import { Editor, convertFromRaw, EditorState } from 'draft-js';
import { useSelector } from "react-redux";

const SelectedBlog  = (props) => {
    const postsFromStore = useSelector(state => state.blogs.posts);
    const { id } = props.match.params;

    const renderPage = () => {

        if(!postsFromStore.length) {
            return (
                <div>
                    <h1>Ouchhh something wrong happened...</h1>
                    <h1>Go Back to <Link to="/">Home</Link> to save yourself, while we defend you</h1>
                </div>
            )
        }
       else {
        const filteredPost = postsFromStore.filter(post => post.id === id)[0];
        const rawEditorState =  convertFromRaw(JSON.parse((filteredPost.body)));
        const editorState = EditorState.createWithContent(rawEditorState);
        return(

            <div className="read-editor" style={{fontSize: '32px'}}>
                <h1>{filteredPost.title}</h1>
                <Editor editorState={editorState} readOnly/>
            </div>
        )
       }
    }
    
    return(
        <>
            {renderPage()}
        </>
    )
}

export default SelectedBlog;