import React, { useState, useContext } from "react";
import { FirebaseContext } from "../FirebaseContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const { user, auth, db } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function register() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        isAdmin: false,
      });
      navigate("/firebasedata");
    } catch (error) {
      const errorCode = error.code;
      console.log("Error registering user -> errorCode:", errorCode);
      if (errorCode == "auth/email-already-in-use") {
        navigate("/login");
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-5 col-md-4 col-lg-3">
            <div
              id="register"
              className="container shadow-lg p-3 mb-5 bg-white rounded border border-dark"
            >
              <h5 className="mt-1 mb-4 pb-5 text-center">Register</h5>
              <div className="row">
                <div className="col-12">
                  <input
                    type="email"
                    placeholder="Email:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="password"
                    placeholder="Password:"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mb-2"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5 pt-3">
                  <button
                    className="btn border-dark btn-sm me-2"
                    onClick={register}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
