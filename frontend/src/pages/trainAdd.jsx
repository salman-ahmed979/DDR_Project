// import Navbar from "../components/Navbar";

import AddTrain from "../components/addTrain";
import Sidebar from "../components/sidebar";

const ManageTrain = () => {
  return (
    <div className="manage-trains">
      <div className="row g-0 align-items-center">
        <div className="col-3-col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <Sidebar />
        </div>
        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
          <AddTrain />
        </div>
      </div>
    </div>
  );
};

export default ManageTrain;
