import { useState } from "react";
import { Fragment } from "react";
import "../css/editTrain.css";
import { useTrain } from "../hooks/useTrain";
import EditOnly from "./editablerows";
import ReadOnly from "./readonlyrows";
const EditableTrain = () => {
  const { trains, Error, Loading } = useTrain();
  const [_id, setID] = useState(null);
  const setRowID = (e, userID) => {
    e.preventDefault();
    if (userID) {
      setID(userID);
    } else {
      setID(null);
    }
  };
  return (
    <div className="train-table">
      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Total Seats</th>
              <th>Avaible Seats</th>
              <th>Price</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trains &&
              trains.map((train) => (
                <Fragment>
                  {_id === train._id ? (
                    <EditOnly key={train._id} train={train} />
                  ) : (
                    <ReadOnly
                      key={train._id}
                      train={train}
                      setRowID={setRowID}
                    />
                  )}
                </Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditableTrain;
