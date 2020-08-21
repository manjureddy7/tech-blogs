import React from 'react';
import { Link } from "react-router-dom";
import { Editor, convertFromRaw, EditorState } from 'draft-js';
import { useSelector } from "react-redux";

const SelectedBlog  = (props) => {

    const { id } = props.match.params;
    const selectedPostDetails = useSelector(state => state.blogs.posts);
    const filteredPost = selectedPostDetails.filter(post => post.id === id)[0];
    const rawEditorState =  convertFromRaw(JSON.parse((filteredPost.body)));
    const editorState = EditorState.createWithContent(rawEditorState);
    
    return(
        <>
            <div className="read-editor" style={{fontSize: '32px'}}>
                <Editor editorState={editorState} readOnly/>
            </div>
        </>
    )
}

export default SelectedBlog;