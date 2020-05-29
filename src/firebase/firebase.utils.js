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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData,
      })
    } catch (error) {
      console.log('Error Creating User', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google authentication utility.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;