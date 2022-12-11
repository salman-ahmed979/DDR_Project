import { useState } from "react";
import { Fragment } from "react";
import "../css/editTrain.css";
import { useTrain } from "../hooks/useTrain";
import EditOnly from "./editablerows";
import ReadOnly from "./readonlyrows";
const EditableTrain = ({ trains }) => {
  const { editTrain, deleteTrain, Error, Loading } = useTrain();
  const [_id, setID] = useState(null);
  const setRowID = (e, userID) => {
    e.preventDefault();
    if (userID) {
      setID(userID);
    } else {
      setID(null);
    }
  };
  const handleEdit = async (e, trainProfile, _id) => {
    e.preventDefault();
    console.log(trainProfile);
    let done = await editTrain(trainProfile, _id);
    if (done) {
      setRowID(e, null);
    }
  };
  const handleDelete = async (e, _trainid) => {
    e.preventDefault();
    await deleteTrain(_trainid);
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
                    <EditOnly
                      key={train._id}
                      train={train}
                      setRowID={setRowID}
                      handleEdit={handleEdit}
                    />
                  ) : (
                    <ReadOnly
                      key={train._id}
                      train={train}
                      setRowID={setRowID}
                      handleDelete={handleDelete}
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
