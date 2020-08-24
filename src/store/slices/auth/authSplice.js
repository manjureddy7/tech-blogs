import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../../firebase/firebase';

const authSplice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false,loading: false, error: null},
    reducers: {
        setUserLogin(state,action) {
            state.isLoggedIn = true
        },
        setUserLoggedOut(state,action) {
            state.isLoggedIn = false;
        },
        setLoading(state,action) {
            const { loading } = action.payload;
            state.loading = loading;
        },
        setErrorWhileLogin(state,action) {
            const { error } = action.payload;
            state.error = error
        },
        onAuthStateChange(state,action) {
            const { userData } = action.payload;
            state.isLoggedIn = userData ? true : false
        }
    }
});

export const  { setUserLogin, setUserLoggedOut, setLoading, setErrorWhileLogin, onAuthStateChange } = authSplice.actions;

export default authSplice.reducer;

export const handleLoginWithFirebase = (email,password) => (dispatch) => {
    dispatch(setLoading({loading: true}))
    auth.signInWithEmailAndPassword(email,password).then(() => {
        console.log("signin successfully done");
        dispatch(setUserLogin());
        dispatch(setLoading({loading: false}))
    })
    .catch(error => {
        console.log("signin error");
        dispatch(setErrorWhileLogin({error}));
        dispatch(setLoading({loading: false}))
    })
}

export const handleLogoutWithFirebase = () => (dispatch) => {
    dispatch(setLoading({loading: true}))
    auth.signOut().then(() => {
        console.log("signout successfully done");
        dispatch(setUserLoggedOut());
        dispatch(onAuthStateChange({userData: null}));
        dispatch(setLoading({loading: false}))
    })
    .catch(error => {
        console.log("singout error");
        dispatch(setErrorWhileLogin({error}));
        dispatch(setLoading({loading: false}))
    })
}
