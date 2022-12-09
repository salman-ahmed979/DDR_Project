import "../css/addTrain.css";
const AddTrain = () => {
  return (
    <div className="addTrain">
      <div className="heading">
        <h1>Add Train Details:</h1>
      </div>
      <form>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="trainName">
              <label>Train Name:</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="trainSource">
              <label>Source Point:</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="trainDestination">
          <label>Destination Point:</label>
          <input type="text" />
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="totalSeats">
              <label>Total Seat:</label>
              <input type="number" min="0" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="price">
              <label>Price:</label>
              <input type="number" min="0" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="startDate">
              <label>Start Date:</label>
              <input type="datetime-local" name="" id="" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="endDate">
              <label>End Date:</label>
              <input type="datetime-local" name="" id="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 button">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTrain;
