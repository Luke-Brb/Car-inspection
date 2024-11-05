import React, { useEffect, useContext } from "react";
import { FirebaseContext } from "./FirebaseContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./routes/Login";
import DataBase from "./routes/DataBase";
import Dashboard from "./routes/Dashboard";

function App() {
  const { user } = useContext(FirebaseContext);
  return <>{user ? <DataBase /> : <Login />}</>;
}

export default App;
