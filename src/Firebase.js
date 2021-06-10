import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHxQJfA91-8sul-KXZTDLvz9BTdO6_7wQ",
    authDomain: "clone-37710.firebaseapp.com",
    databaseURL: "https://clone-37710.firebaseio.com",
    projectId: "clone-37710",
    storageBucket: "clone-37710.appspot.com",
    messagingSenderId: "387482867498",
    appId: "1:387482867498:web:4e07d0394d04988f1df053",
    measurementId: "G-99Q3YH7KLR"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
