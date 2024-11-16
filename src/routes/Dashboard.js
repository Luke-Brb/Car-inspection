import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-5 col-md-4 col-lg-3">
            <div
              id="homePage"
              className="container shadow-lg p-3 mb-5 bg-white rounded border border-dark"
            >
              <h5 className="mt-1 mb-4 pb-5 text-center">Welcome</h5>
              <p>contact: barbu.lucian@gmail.com</p>
              <button
                className="btn border-dark btn-sm me-2"
                onClick={handleNavigate}
              >
                Register / Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
