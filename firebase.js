// firebase.js (Version 8 Compatibility)
const firebaseConfig = {
  apiKey: "AIzaSyBD6Yba5P9mTdS_cW_D88x1MOmQ01LcWIQ",
  authDomain: "employer-employee-connect.firebaseapp.com",
  projectId: "employer-employee-connect",
  storageBucket: "employer-employee-connect.appspot.com",
  messagingSenderId: "1008070246651",
  appId: "1:1008070246651:web:9624e9c0f5d0075fcaf05e"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize services
const auth = firebase.auth();
const database = firebase.database();
  
