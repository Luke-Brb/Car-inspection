import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FirebaseContext } from "./FirebaseContext";
import RegisterLogin from "./routes/RegisterLogin";
import DataBase from "./routes/DataBase";
import Dashboard from "./routes/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { user } = useContext(FirebaseContext);

  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/login", element: <RegisterLogin /> },
    { path: "/database", element: <DataBase /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
