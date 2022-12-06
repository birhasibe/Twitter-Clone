import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2h8npprablgD8FP5xpV65yXi0cDqZSps",
    authDomain: "twitter-clone-1-2-3.firebaseapp.com",
    projectId: "twitter-clone-1-2-3",
    storageBucket: "twitter-clone-1-2-3.appspot.com",
    messagingSenderId: "477919595725",
    appId: "1:477919595725:web:3df4c56486f642198f2d84",
    measurementId: "G-308CFLCQX6"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;