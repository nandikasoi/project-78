import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDR8Wid-3AX3-NItOKnapWFh04tbAAqS9E",
    authDomain: "bartersystemapp-eb99b.firebaseapp.com",
    projectId: "bartersystemapp-eb99b",
    storageBucket: "bartersystemapp-eb99b.appspot.com",
    messagingSenderId: "519605634419",
    appId: "1:519605634419:web:c33b5a51ffe0f49ed23106"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
