import React, { useState, useContext } from "react";
import { FirebaseContext, auth } from "../FirebaseContext";
import { useNavigate } from "react-router-dom";
import {
  handleSubmit,
  handleList,
  deleteList,
  handleLogout,
} from "./APIConnector";
import Navbar from "../components/Navbar";
import { format } from "date-fns";
import "bootstrap/dist/css/bootstrap.min.css";

function FirebaseData() {
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();

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
  const [documents, setDocuments] = useState([]);

  const submitData = async (e) => {
    e.preventDefault();
    if (user && user.uid) {
      await handleSubmit(
        vinNumber,
        brand,
        model,
        mileage,
        cabinAirFilter,
        engineAirFilter,
        engineOilFilter,
        fuelFilter,
        gearboxOilFilter,
        transferCaseFilter,
        observations,
        engineOil,
        gearboxOil,
        transferCaseOil,
        user
      );
    } else {
      console.error("User  is not authenticated.");
    }
  };

  const listData = async () => {
    if (user && user.uid) {
      await handleList(user, setDocuments);
    } else {
      console.error("User undefined.");
    }
  };

  const logout = () => {
    handleLogout(navigate);
  };

  const deleteRecord = async (docId) => {
    deleteList(docId);
    listData();
  };

  return (
    <>
      <Navbar user={user} />
      <div className="container shadow-lg p-3 mt-5 bg-white rounded">
        <div id="input-data">
          <div className="border rounded p-3 mb-3 bg-light">
            <h5 className="border-bottom pb-2">Input data :</h5>
            <div onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <h5>VIN</h5>
                  <input
                    type="text"
                    placeholder="VIN number"
                    id="vin_number"
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value)}
                    className="form-control mb-2"
                  />
                  <h5>Car Type</h5>
                  <input
                    type="text"
                    placeholder="Brand"
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Mileage"
                    id="mileage"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    className="form-control mb-2"
                  />
                </div>
                <div className="col-md-4">
                  <h5>Filters</h5>
                  <input
                    type="text"
                    placeholder="Cabin Air Filter"
                    id="cabin_air_filter"
                    value={cabinAirFilter}
                    onChange={(e) => setCabinAirFilter(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Engine Air Filter"
                    id="engine_air_filter"
                    value={engineAirFilter}
                    onChange={(e) => setEngineAirFilter(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Engine Oil Filter"
                    id="engine_oil_filter"
                    value={engineOilFilter}
                    onChange={(e) => setEngineOilFilter(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Fuel Filter"
                    id="fuel_filter"
                    value={fuelFilter}
                    onChange={(e) => setFuelFilter(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Gearbox Oil Filter"
                    id="gearbox_oil_filter"
                    value={gearboxOilFilter}
                    onChange={(e) => setGearboxOilFilter(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Transfer Case Filter"
                    id="transfer_case_filter"
                    value={transferCaseFilter}
                    onChange={(e) => setTransferCaseFilter(e.target.value)}
                    className="form-control mb-2"
                  />
                </div>
                <div className="col-md-4">
                  <h5>Miscellaneous</h5>
                  <input
                    type="text"
                    placeholder="Observations"
                    id="observations"
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    className="form-control mb-2"
                  />
                  <h5>Oils</h5>
                  <input
                    type="text"
                    placeholder="Engine oil"
                    id="engine_oil"
                    value={engineOil}
                    onChange={(e) => setEngineOil(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Gearbox oil"
                    id="gearbox_oil"
                    value={gearboxOil}
                    onChange={(e) => setGearboxOil(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Transfer Case"
                    id="transfer_case"
                    value={transferCaseOil}
                    onChange={(e) => setTransferCaseOil(e.target.value)}
                    className="form-control mb-2"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <button
                      type="button"
                      className="bg-info text-dark btn btn-secondary btn-sm me-2"
                      onClick={submitData}
                    >
                      Save Data
                    </button>
                    <button
                      type="button"
                      className="bg-info-subtle text-info-emphasis btn btn-secondary btn-sm"
                      onClick={listData}
                    >
                      Saved lists
                    </button>
                  </div>
                  <button
                    className="bg-warning text-dark btn btn-secondary btn-sm"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div id="list">
          {documents.map((doc) => (
            <div key={doc.id} className="border rounded p-3 mb-3 bg-light">
              <h5 className="border-bottom pb-2">
                {doc.createdAt
                  ? format(doc.createdAt.toDate(), "dd.MM.yyyy - HH:mm:ss")
                  : "Date not available"}
              </h5>
              <div className="row">
                <div className="col-md-4">
                  <p>VIN number: {doc.vin_number.vinNumber}</p>
                  <h6>Car Type:</h6>
                  <p>Brand: {doc.carType.brand}</p>
                  <p>Model: {doc.carType.model}</p>
                  <p>Mileage: {doc.carType.mileage}</p>
                </div>
                <div className="col-md-4">
                  <h6>Filters:</h6>
                  <p>Cabin Air Filter: {doc.filters.cabinAirFilter}</p>
                  <p>Engine Air Filter: {doc.filters.engineAirFilter}</p>
                  <p>Engine Oil Filter: {doc.filters.engineOilFilter}</p>
                  <p>Fuel Filter: {doc.filters.fuelFilter}</p>
                  <p>Gearbox Oil Filter: {doc.filters.gearboxOilFilter}</p>
                  <p>Transfer Case Filter: {doc.filters.transferCaseFilter}</p>
                </div>
                <div className="col-md-4">
                  <h6>Miscellaneous:</h6>
                  <p>Observations: {doc.miscellaneous.observations}</p>
                  <h6>Oils:</h6>
                  <p>Engine Oil: {doc.oils.engineOil}</p>
                  <p>Gearbox Oil: {doc.oils.gearboxOil}</p>
                  <p>Transfer Case Oil: {doc.oils.transferCaseOil}</p>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="bg-danger text-dark btn btn-secondary btn-sm"
                  onClick={() => deleteRecord(doc.id)}
                >
                  Delete data
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FirebaseData;
