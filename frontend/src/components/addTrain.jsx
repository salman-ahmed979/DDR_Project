import { useState } from "react";
import "../css/addTrain.css";
import { useTrain } from "../hooks/useTrain";
const AddTrain = () => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [totalSeats, setSeats] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setsDate] = useState("");
  const [endDate, seteDate] = useState("");

  const trainProfile = {
    name,
    source,
    destination,
    totalSeats,
    price,
    startDate,
    endDate,
  };
  const { addTrain, Error, Loading } = useTrain();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTrain(trainProfile);
  };
  return (
    <div className="addTrain">
      <div className="heading">
        <h1>Add Train Details:</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {Error && <p>{Error}</p>}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="trainName">
              <label>Train Name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="trainSource">
              <label>Source Point:</label>
              <input
                type="text"
                onChange={(e) => {
                  setSource(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="trainDestination">
          <label>Destination Point:</label>
          <input
            type="text"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="totalSeats">
              <label>Total Seat:</label>
              <input
                type="number"
                min="0"
                onChange={(e) => {
                  setSeats(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="price">
              <label>Price:</label>
              <input
                type="number"
                min="0"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="startDate">
              <label>Start Date:</label>
              <input
                type="datetime-local"
                onChange={(e) => {
                  setsDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="endDate">
              <label>End Date:</label>
              <input
                type="datetime-local"
                onChange={(e) => {
                  seteDate(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 button">
            <button disables={Loading}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTrain;
