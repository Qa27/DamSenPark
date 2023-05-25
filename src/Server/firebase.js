import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "little-a-little-71ad5.firebaseapp.com",
  projectId: "little-a-little",
  storageBucket: "little-a-little.appspot.com",
  messagingSenderId: "691191793026",
  appId: "1:691191793026:web:3a0ed828d395eb6bb6fb9b",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
