import { initializeApp } from "firebase/app";  
import { getFirestore } from "firebase/firestore";  
import { getAuth } from "firebase/auth";  

// REPLACE BELOW WITH YOUR FIREBASE CONFIG  
const firebaseConfig = {  
  apiKey: "PASTE_HERE",  
  authDomain: "PASTE_HERE",  
  projectId: "PASTE_HERE",  
  storageBucket: "PASTE_HERE",  
  messagingSenderId: "PASTE_HERE",  
  appId: "PASTE_HERE"  
};  

const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app);  
export const auth = getAuth(app);  
