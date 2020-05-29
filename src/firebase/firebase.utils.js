// Firebase utility library.
// Can pull specific libraries, but need this base.
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA_yd8r6gf784AcmfoC9HgaNNlxTVjYnlY",
  authDomain: "crwn-db-b43e9.firebaseapp.com",
  databaseURL: "https://crwn-db-b43e9.firebaseio.com",
  projectId: "crwn-db-b43e9",
  storageBucket: "crwn-db-b43e9.appspot.com",
  messagingSenderId: "679496773534",
  appId: "1:679496773534:web:1ec80c3190aec8c627b08f",
  measurementId: "G-LX4HFGRZDT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google authentication utility.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;