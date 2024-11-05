import React, { createContext, useState, useEffect } from "react";
import { auth } from "./firebaseInit";

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  // const logout = async () => {
  //   try {
  //     await auth.signOut();
  //     setUser(null);
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //   }
  // };

  return (
    <FirebaseContext.Provider value={{ user, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
