import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Take a reference to Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDwYuMsDLJe7uKxunJc2OasfTcYiN5XgKY",
  authDomain: "car-inspections.firebaseapp.com",
  databaseURL:
    "https://car-inspections-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "car-inspections",
  storageBucket: "car-inspections.appspot.com",
  messagingSenderId: "730698993723",
  appId: "1:730698993723:web:7fe827787a0b8fb622cc1e",
  measurementId: "G-478BPJQBKM",
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
