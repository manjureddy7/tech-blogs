import { db } from '../firebase/firebase';


export const getPostsFromFirestore = async () => {
    let posts = [];
    let error = ''
    db.collection("blogs").get()
    // .then(querySnapshot => {
    //     posts = querySnapshot.docs.map(doc => doc.data);
    // })
    // .catch(err => {
    //     error = err;
    // })
    // return {
    //     posts,
    //     error
    // }
}



// ===== BELOW FUNCTIONS CAN BE HANDYYY =====

// get the whole collection
// db.collection("cities")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log(data); // array of cities objects
// });

// // or get the single doc from the collection
// db.collection("cities")
// .doc('LA')
// .get()
// .then(doc => {
//   const data = doc.data();
//   console.log(data); // LA city object with key-value pair
// });

// // or get all docs matching the query
// db.collection("cities")
// .where("country", "==", "USA")
// .get()
// .then(querySnapshot => {
//   const data = querySnapshot.docs.map(doc => doc.data());
//   console.log(data); // array of cities objects
// });