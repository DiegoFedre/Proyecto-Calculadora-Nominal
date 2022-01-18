import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAeIekNfevz4BfcilCCKLcFNmOhxseXSxs",
    authDomain: "crud-react-4de1c.firebaseapp.com",
    projectId: "crud-react-4de1c",
    storageBucket: "crud-react-4de1c.appspot.com",
    messagingSenderId: "559589385513",
    appId: "1:559589385513:web:985f60203f5722c1c7c338"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { firebase, db, googleAuthProvider };