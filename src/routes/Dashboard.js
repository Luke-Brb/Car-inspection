import React, { useState, useContext } from "react";
import { FirebaseContext } from "../FirebaseContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseInit";
import Navbar from "../components/Navbar";

function Dashboard() {
  const { user, logout } = useContext(FirebaseContext);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}

export default Dashboard;
