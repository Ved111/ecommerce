import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKDTwQBG41FPsL2EbY_P90F_Z4FqBCsS4",
    authDomain: "crwn-proj-e3797.firebaseapp.com",
    databaseURL: "https://crwn-proj-e3797.firebaseio.com",
    projectId: "crwn-proj-e3797",
    storageBucket: "crwn-proj-e3797.appspot.com",
    messagingSenderId: "185437718764",
    appId: "1:185437718764:web:88104a2cc02dfb10673dc9",
    measurementId: "G-8GSK5E4JN7"
  };

  firebase.initializeApp(config);

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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  export const auth = firebase.auth();  
  export const firestore = firebase.firestore();
  
  
  
  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({ prompt: 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  
  
  export default firebase;