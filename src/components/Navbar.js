import React from "react";

function Navbar({ user }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center">
          <div className="me-0" style={{ paddingLeft: "5px" }}>
            <p className="text-primary mb-0" style={{ whiteSpace: "nowrap" }}>
              Welcome, {user ? user.email : "please login"}
            </p>
          </div>
          <div className="flex-grow-1 text-center">
            <h1 className="navbar-brand mb-0 fs-2">
              <strong>Car Inspection</strong>
            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
