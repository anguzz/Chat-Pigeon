
import { initializeApp } from "firebase/app";

import { collection,getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkweG8mdpmvdjK7KBqjAhuwFvT9btE2FI",
  authDomain: "chat-pigeon.firebaseapp.com",
  projectId: "chat-pigeon",
  storageBucket: "chat-pigeon.appspot.com",
  messagingSenderId: "997823023529",
  appId: "1:997823023529:web:181e4b4f683c04581e9cb8"
};

initializeApp(firebaseConfig);



export const db = getFirestore();
export const col = collection(db, "ChatPigeon");

