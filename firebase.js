// firebase.js
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD6Yba5P9mTdS_cW_D88x1MOmQ01LcWIQ",
  authDomain: "employer-employee-connect.firebaseapp.com",
  projectId: "employer-employee-connect",
  storageBucket: "employer-employee-connect.firebasestorage.app",
  messagingSenderId: "1008070246651",
  appId: "1:1008070246651:web:9624e9c0f5d0075fcaf05e",
  measurementId: "G-ZKSRHG72W7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
