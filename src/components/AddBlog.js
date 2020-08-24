import React, { useState } from 'react';

// Text editor for react from draft-js
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';


// get plugins for draftjs

import Editor from "draft-js-plugins-editor";
import createHighlightPluginEditor from './plugins/highlightPlugn';
import BlockStyleToolbar from "./blockType/BlockStyleToolbar";

// Store related imports
import { useDispatch } from "react-redux";
import { addPostToFirestore } from '../store/slices/blogs/blogsSlice';

const AddBlog  = () => {

    // Editor related items
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const highlightPlugin = createHighlightPluginEditor();
    const plugins = [highlightPlugin];

    //Blog Title state
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    // Store related
    const dispatch = useDispatch();

    // Title for blog
    const handleTitleChange = (e) => {
        const { target : {value}} = e;
        setTitle(value);
    }

    const handleCategoryChange = (e) => {
        const { target : {value}} = e;
        setCategory(value);
    }

    // Add Blog
    const addBlog = () => {
        // convert immutable data to raw js obj
        const convertedStateToRaw = convertToRaw(editorState.getCurrentContent());
        // stringfiy it
        const body = JSON.stringify(convertedStateToRaw);
        if(!title || !body) return;
        dispatch(addPostToFirestore(title,category,body));
        setTitle('');
        setEditorState(EditorState.createEmpty());
    }

    // Handle on change on editor
    const handleOnChange = (value) => {
        setEditorState(value)
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if(newState) {
            setEditorState(newState);
            return 'handled'
        }
        return 'not-handled'
    }

    // **Handle button clicks
    const onHandleBoldClick = () => {
        handleOnChange(RichUtils.toggleInlineStyle(editorState,'BOLD'));
    }

    const onHandleItalicClick = () => {
        handleOnChange(RichUtils.toggleInlineStyle(editorState,'ITALIC'));
    }

    const onHandleUnderlineClick = () => {
        handleOnChange(RichUtils.toggleInlineStyle(editorState,'UNDERLINE'));
    }

    const onHandleHighlightClick = () => {
        handleOnChange(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'))
    }

    const onHandleStrikeThroughClick = () => {
        handleOnChange(RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH"));
    }

   const onAddLinkClick = () => {
        const selection = editorState.getSelection();
        const link = window.prompt("Paste the link -");
        if (!link) {
          this.onChange(RichUtils.toggleLink(editorState, selection, null));
          return "handled";
        }
        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
          url: link
        });
        const newEditorState = EditorState.push(
          editorState,
          contentWithEntity,
          "create-entity"
        );
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        handleOnChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
        return "handled";
    };

    const toggleBlockType = blockType => {
    handleOnChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    // **Handle button clicks ends here
        
    return(
        <div className="add-blog-view">
            <BlockStyleToolbar
                editorState={editorState}
                onToggle={toggleBlockType}
            />
            <div className="editorButtons">
                <button className="bold" onClick={onHandleBoldClick}>B</button>
                <button className="italic" onClick={onHandleItalicClick}>I</button>
                <button className="underline" onClick={onHandleUnderlineClick}>U</button>
                <button className="strike" onClick={onHandleStrikeThroughClick}>Abc</button>
                <button className="highlight" onClick={onHandleHighlightClick}>H</button>
                <button className="link" onClick={onAddLinkClick}>@</button>
            </div>

            <input className="title-input" type="text" onChange={handleTitleChange} placeholder="Enter your Blog Title..." name="title" value={title} />
            <input className="title-input" type="text" onChange={handleCategoryChange} placeholder="Specify category.." name="category" value={category} />
            <div className="editor">
                <Editor 
                    editorState={editorState}
                    onChange={handleOnChange}
                    handleKeyCommand={handleKeyCommand}
                    plugins={plugins}
                />
            </div>
            <div className="add-blog">
                <button onClick={addBlog}>Add Blog</button>
            </div>
        </div>
    )
}

export default AddBlog;