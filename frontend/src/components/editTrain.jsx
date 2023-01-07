import { useState } from "react";
import { Fragment } from "react";
import "../css/editTrain.css";
import { useTrain } from "../hooks/useTrain";
import Breadcrumb from "./Breadcrumb";
import EditOnly from "./editablerows";
import ReadOnly from "./readonlyrows";
const EditableTrain = ({ trains }) => {
  const [crumbs, setCrumbs] = useState(["Admin", "Train", "ViewTrain"]);
  const { editTrain, deleteTrain, Error, Loading } = useTrain();
  const [_id, setID] = useState(null);
  const setRowID = (e, userID) => {
    e.preventDefault();
    if (userID) {
      setID(userID);
      crumbs.push("EditTrain");
    } else {
      setID(null);
      crumbs.pop("EditTrain");
    }
  };
  const handleEdit = async (e, trainProfile, _id) => {
    e.preventDefault();
    let done = await editTrain(trainProfile, _id);
    console.log(done);
    if (done) {
      setID(null);
      crumbs.pop("EditTrain");
    }
  };
  const handleDelete = async (e, _trainid) => {
    e.preventDefault();
    await deleteTrain(_trainid);
  };
  return (
    <div className="edit">
      <Breadcrumb crumbs={crumbs} />
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
    </div>
  );
};

export default EditableTrain;
