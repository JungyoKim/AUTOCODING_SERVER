import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPi1_JCCG0kFY6M7LLH4vzfLbtVpqTUHs",
  authDomain: "autocoder-js.firebaseapp.com",
  projectId: "autocoder-js",
  storageBucket: "autocoder-js.appspot.com",
  messagingSenderId: "896861018272",
  appId: "1:896861018272:web:21879e925e3b28fa6d51c5",
  measurementId: "G-SVSQ4VD6CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);