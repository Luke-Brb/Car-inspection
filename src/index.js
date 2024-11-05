import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { FirebaseProvider } from "./FirebaseContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>
);
