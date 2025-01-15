import React, { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwYuMsDLJe7uKxunJc2OasfTcYiN5XgKY",
  authDomain: "car-inspections.firebaseapp.com",
  databaseURL:
    "https://car-inspections-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "car-inspections",
  storageBucket: "car-inspections.appspot.com",
  messagingSenderId: "730698993723",
  appId: "1:730698993723:web:7fe827787a0b8fb622cc1e",
  measurementId: "G-478BPJQBKM",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider value={{ user, auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext, auth, db };
