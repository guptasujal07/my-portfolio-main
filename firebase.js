// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.firebase_key,
  authDomain: "portfolio-a1e56.firebaseapp.com",
  projectId: "portfolio-a1e56",
  storageBucket: "portfolio-a1e56.appspot.com",
  messagingSenderId: "842953796344",
  appId: "1:842953796344:web:8a59f5afca60788a41a90d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
