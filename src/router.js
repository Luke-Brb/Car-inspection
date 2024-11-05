import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import DataBase from "./routes/DataBase";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/database", element: <DataBase /> },
]);
