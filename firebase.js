import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// REPLACE THE VALUES BELOW WITH YOUR FIREBASE CONFIG (from Firebase Console)
const firebaseConfig = {

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
