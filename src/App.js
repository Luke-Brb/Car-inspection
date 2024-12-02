import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import FirebaseData from "./utils/FirebaseData";
import Dashboard from "./routes/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/firebasedata", element: <FirebaseData /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
