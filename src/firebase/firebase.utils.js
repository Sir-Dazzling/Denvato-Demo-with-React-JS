import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Configuring settings to match database hosted on Google Firebase.
const config =
{
    apiKey: "AIzaSyCB_Wrw4nB4wA8o2ATBGUZw5QEIOqywGfg",
    authDomain: "denvatodemo-db.firebaseapp.com",
    databaseURL: "https://denvatodemo-db.firebaseio.com",
    projectId: "denvatodemo-db",
    storageBucket: "denvatodemo-db.appspot.com",
    messagingSenderId: "280115274075",
    appId: "1:280115274075:web:b9c58f545c2a1d5afa7a7e",
    measurementId: "G-0XNRELRGDK"
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additonalData) => 
{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

   if(!snapshot.exists)
   {
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try 
       {
        await userRef.set({
            displayName,email,createdAt,...additonalData
        });    
       } catch (error) 
       {
           console.log("Error creating User.",error.message);
       }
   }
   return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Setting Google Authentication provider to authenticate user accounts.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;