import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { FirebaseContext } from "../FirebaseContext";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../firebaseInit";

function Login() {
  const { user, auth } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User  registered successfully:", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error registering user:", errorCode, errorMessage);
    }
  };

  const verifyIdToken = async (token) => {
    return token;
  };

  const projectId = firebaseApp.projectId;
  console.log("Project ID:", projectId);

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user email : ", user.email);
      console.log("User  logged in successfully:", user);

      const accessToken = await user.getIdToken();
      console.log("user.getIdToken() :", accessToken);

      const uid = user.uid;
      console.log("user.uid :", uid);

      const okId = await verifyIdToken(accessToken);
      console.log("okId => ", okId);

      const test = await getAuth().verifyIdToken.accessToken;
      console.log("getAuth().verifyIdToken(idToken) :", test);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error logging in user:", errorCode, errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
}

export default Login;
