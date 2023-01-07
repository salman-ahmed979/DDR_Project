import { useEffect, useState } from "react";
import EditableTrain from "../components/editTrain";
import Sidebar from "../components/sidebar";

const EditTrains = () => {
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [trains, setTrains] = useState();
  useEffect(() => {
    const getTrains = async () => {
      setError(null);
      setLoading(null);
      const res = await fetch("http://localhost:5000/train/getTrains", {
        credentials: "include",
      });
      const json = await res.json();
      if (res.ok) {
        setError(null);
        setLoading(false);
        setTrains(json.message);
      }
      if (!res.ok) {
        setError(json.message);
        setLoading(true);
      }
    };
    getTrains();
  }, []);
  return (
    <div className="manage-trains">
      <div className="row g-0 align-items-center">
        <div className="col-3-col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <Sidebar />
        </div>
        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
          <div className="edit-heading">
            <div className="edit-heading-inner">
              <h1>Train Details</h1>
            </div>
          </div>
          <EditableTrain trains={trains} />
        </div>
      </div>
    </div>
  );
};

export default EditTrains;
