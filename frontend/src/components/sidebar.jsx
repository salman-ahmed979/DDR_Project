import myLogo from "../assets/logo.png";
import "../css/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <a class="navbar-brand" href="#">
          <img src={myLogo} className="img-fluid" alt="" />
          <span>MetroRailway</span>
        </a>
      </div>
      <ul>
        <li>
          <div className="addtrain">
            <i class="fa-solid fa-plus"></i>
            <span> Add Train</span>
          </div>
        </li>

        <li>
          <div className="viewtrain">
            <i class="fa-solid fa-train"></i>
            <span>View Train</span>
          </div>
        </li>
      </ul>
      <div className="logout">
        <button>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
