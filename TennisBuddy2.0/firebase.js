import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwC4CEUe6s6oA1_Yn_VlABGB87AGRyjfc",
  authDomain: "tennis-buddy-2.firebaseapp.com",
  projectId: "tennis-buddy-2",
  storageBucket: "tennis-buddy-2.appspot.com",
  messagingSenderId: "222143102",
  appId: "1:222143102:web:a01fb0bf4cac43696bae2f",
  measurementId: "G-TE50JH18JP"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const firestore = getFirestore(FIREBASE_APP);
