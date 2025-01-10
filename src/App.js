import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import FirebaseData from "./routes/FirebaseData";
import Dashboard from "./routes/Dashboard";
import DashboardAdmin from "./routes/DashboardAdmin";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "dashboardadmin", element: <DashboardAdmin /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/firebasedata", element: <FirebaseData /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
