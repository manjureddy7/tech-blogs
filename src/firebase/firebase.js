import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     // projectId: process.env.REACT_APP_PROJECT_ID,
//     projectId: "tech-blogs-521ef",
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyDU_fHERmPC_JjFCuoxHSOTM1UnXMgvqNA",
    authDomain: "tech-blogs-521ef.firebaseapp.com",
    databaseURL: "https://tech-blogs-521ef.firebaseio.com",
    projectId: "tech-blogs-521ef",
    storageBucket: "tech-blogs-521ef.appspot.com",
    messagingSenderId: "616625439342",
    appId: "1:616625439342:web:0e3ddc403bce55babddc7f"
  };

export default firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();