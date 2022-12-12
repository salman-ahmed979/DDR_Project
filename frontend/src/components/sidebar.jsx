import { Link } from "react-router-dom";
import myLogo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import "../css/Sidebar.css";
const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="logo">
        <a class="navbar-brand" href="#">
          <img src={myLogo} className="img-fluid" alt="" />
          <span>MetroRailway</span>
        </a>
      </div>
      <ul>
        <Link to="/admin/train/add">
          <li>
            <div className="addtrain">
              <i class="fa-solid fa-plus"></i>
              <span> Add Train</span>
            </div>
          </li>
        </Link>
        <Link to="/admin/train/view">
          <li>
            <div className="viewtrain">
              <i class="fa-solid fa-train"></i>
              <span>View Train</span>
            </div>
          </li>
        </Link>
      </ul>
      <div className="logout">
        <button
          onClick={(e) => {
            e.preventDefault();

            history.push("/login");
          }}
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
