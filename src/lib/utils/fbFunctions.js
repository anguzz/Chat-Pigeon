
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, } from "firebase/auth";

import { addDoc,collection,getFirestore,onSnapshot } from "firebase/firestore";
 
import { col } from "./firebase";


  export { login, logout, col, addDoc, auth, onSnapshot };

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("you are now signed out and sent messages will appear as anonymous");
      })
      .catch((error) => {
      });
  };