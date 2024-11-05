import React, { useState, useContext } from "react";
import { FirebaseContext } from "../FirebaseContext";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { auth } from "../firebaseInit";

function DataBase() {
  const { user, logout } = useContext(FirebaseContext);

  const [vinNumber, setVinNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");

  const [cabinAirFilter, setCabinAirFilter] = useState("");
  const [engineAirFilter, setEngineAirFilter] = useState("");
  const [engineOilFilter, setEngineOilFilter] = useState("");
  const [fuelFilter, setFuelFilter] = useState("");
  const [gearboxOilFilter, setGearboxOilFilter] = useState("");
  const [transferCaseFilter, setTransferCaseFilter] = useState("");

  const [observations, setObservations] = useState("");

  const [engineOil, setEngineOil] = useState("");
  const [gearboxOil, setGearboxOil] = useState("");
  const [transferCaseOil, setTransferCaseOil] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const vinNumberCollection = collection(db, "vin_number");
    const newDoc = await addDoc(vinNumberCollection, {
      vin_number: { vinNumber },
      carType: {
        brand,
        model,
        mileage,
      },
      filters: {
        cabinAirFilter,
        engineAirFilter,
        engineOilFilter,
        fuelFilter,
        gearboxOilFilter,
        transferCaseFilter,
      },
      miscellaneous: {
        observations,
      },
      oils: {
        engineOil,
        gearboxOil,
        transferCaseOil,
      },
    });
    console.log("Document ID:", newDoc.id);
  };

  //   const handleLogout = async () => {
  //     await logout(); // Sign out the user
  //     navigate("/Login"); // Redirect to Login page
  //   };

  return (
    <>
      <Navbar />
      <div>
        <Container>
          <Row>
            <Col xs={4} md={3} lg={2}>
              <hr></hr>
              <p className="text-primary">Welcome, {user.email}</p>
              <ul>
                <li>Vin number</li>
                <li>Car Type</li>
                <li>Filters</li>
                <li>Miscellaneous</li>
                <li>Oils</li>
              </ul>
            </Col>
            <Col xs={8} md={9} lg={10}>
              <form onSubmit={handleSubmit}>
                <hr></hr>
                <h4>VIN number</h4>
                <input
                  type="text"
                  placeholder="VIN number"
                  id="vin_number"
                  value={vinNumber}
                  onChange={(e) => setVinNumber(e.target.value)}
                />
                <hr></hr>
                <h4>Car Type</h4>
                <input
                  type="text"
                  placeholder="Brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Model"
                  id="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mileage"
                  id="mileage"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                />
                <hr></hr>
                <h4>Filters</h4>
                <input
                  type="text"
                  placeholder="Cabin Air Filter"
                  id="cabin_air_filter"
                  value={cabinAirFilter}
                  onChange={(e) => setCabinAirFilter(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Engine Air Filter"
                  id="engine_air_filter"
                  value={engineAirFilter}
                  onChange={(e) => setEngineAirFilter(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Engine Oil Filter"
                  id="engine_oil_filter"
                  value={engineOilFilter}
                  onChange={(e) => setEngineOilFilter(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Fuel Filter"
                  id="fuel_filter"
                  value={fuelFilter}
                  onChange={(e) => setFuelFilter(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Gearbox Oil Filter"
                  id="gearbox_oil_filter"
                  value={gearboxOilFilter}
                  onChange={(e) => setGearboxOilFilter(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Transfer Case Filter"
                  id="transfer_case_filter"
                  value={transferCaseFilter}
                  onChange={(e) => setTransferCaseFilter(e.target.value)}
                />
                <hr></hr>
                <h4>Miscellaneous</h4>
                <input
                  type="text"
                  placeholder="Observations"
                  id="observations"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                />
                <hr></hr>
                <h4>Oils</h4>
                <input
                  type="text"
                  placeholder="Engine oil"
                  id="engine_oil"
                  value={engineOil}
                  onChange={(e) => setEngineOil(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Gearbox oil"
                  id="gearbox_oil"
                  value={gearboxOil}
                  onChange={(e) => setGearboxOil(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Transfer Case"
                  id="transfer_case"
                  value={transferCaseOil}
                  onChange={(e) => setTransferCaseOil(e.target.value)}
                />
                <br></br>
                <p></p>
                <button type="submit" className="btn btn-primary btn-sm">
                  Save Data
                </button>
                <button type="submit" className="btn btn-secondary btn-sm">
                  List Data
                </button>
              </form>
            </Col>
          </Row>
          <hr></hr>
          <button onClick={() => auth.signOut()}>Logout</button>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </Container>
      </div>
    </>
  );
}

export default DataBase;
