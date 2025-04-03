import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// REPLACE THE VALUES BELOW WITH YOUR FIREBASE CONFIG (from Firebase Console)
const firebaseConfig = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD6Yba5P9mTdS_cW_D88x1MOmQ01LcWIQ",
  authDomain: "employer-employee-connect.firebaseapp.com",
  projectId: "employer-employee-connect",
  storageBucket: "employer-employee-connect.firebasestorage.app",
  messagingSenderId: "1008070246651",
  appId: "1:1008070246651:web:9624e9c0f5d0075fcaf05e",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
