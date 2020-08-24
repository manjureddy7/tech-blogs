import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../../firebase/firebase';
import { v4 as uuid } from "uuid";

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {posts:[], error: '', msg: '', loading: false},
    reducers: {
        setLoading(state,action){
            const { loading } = action.payload;
            state.loading = loading;
        },
        addBlog(state,action) {

        },
        getBlogs(state,action) {
            const { posts } = action.payload;
            state.posts = [];
            state.posts.push(...posts);
        },
        getBlog(state,action) {
        },
        updateBlog(state,action) {
        },
        deleteBlog(state,action) {
        },
        errorWhileTalkingToFirestore(state,action) {
            const { error } = action.payload;
            state.error = error
        },
        addCustomMessage(state,action) {
            const { message } = action.payload;
            state.msg = message
        }

    }
});

export default blogsSlice.reducer;

export const { addBlog, getBlogs, getBlog, updateBlog, deleteBlog, errorWhileTalkingToFirestore, addCustomMessage, setLoading } = blogsSlice.actions;


// Api's

export const getPostsFromFirestore = () => (dispatch) => {
    dispatch(setLoading({loading: true}));
    db.collection("blogs").get() 
    .then(querySnapshot => {
        const posts = querySnapshot.docs.map(doc => doc.data());
        dispatch(getBlogs({posts}));
        dispatch(setLoading({loading: false}));
        dispatch(addCustomMessage({message: "Successfully got posts from Firestore"}));
    })
    .catch(error => {
        dispatch(errorWhileTalkingToFirestore({error}));
        dispatch(setLoading({loading: false}));
    })
}

export const addPostToFirestore = (title,category,body) => (dispatch) => {
    const id = uuid();
    dispatch(setLoading({loading: true}));
    db.collection("blogs").doc(id).set({
        title,
        body,
        id,
        category
    })
    .then(() => {
        dispatch(getPostsFromFirestore());
        dispatch(setLoading({loading: false}));
        dispatch(addCustomMessage({message: "Successfully added Post to Firestore"}));
    })
    .catch(error => {
        dispatch(errorWhileTalkingToFirestore({error}));
        dispatch(setLoading({loading: false}));
    });

}