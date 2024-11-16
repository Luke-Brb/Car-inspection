import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { FirebaseProvider } from "./FirebaseContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
);
