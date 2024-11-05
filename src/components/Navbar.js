import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <h1 className="navbar-brand mb-2 fs-2">
            <strong>Car inspection</strong>
          </h1>
          <p>
            <Link to="/Login">Login</Link>
          </p>
          <br></br>
          <Link to="/DataBase">DataBase</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
