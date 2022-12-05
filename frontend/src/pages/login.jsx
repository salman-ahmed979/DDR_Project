import "../css/login.css";
import MyImage from "../assets/login-page.jpg";
import MyImage1 from "../assets/logo.png";
const Login = () => {
  return (
    <div className="loginform">
      <nav>
        <a>
          <img src={MyImage1} alt="" />
          <span>MetroRailway</span>
        </a>
      </nav>

      <div className="row g-0 align-items-center justify-content-center">
        <div className="col-12 col-sm-12 col md-12 col-lg-6 col-xl-6 colxxl-6 ">
          <div className="formImg">
            <img src={MyImage} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col md-12 col-lg-6 col-xl-6 colxxl-6">
          <div className="form">
            <div className="form-inner-portion">
              <h1>
                Hi, <span></span> Welcome Back!
              </h1>
              <form>
                <div className="username">
                  <label>Username:</label>
                  <input type="text" required />
                </div>
                <div className="password">
                  <label>Password:</label>
                  <input type="password" required />
                </div>
                <div className="submitButton">
                  <button>Login</button>
                </div>
              </form>
              <div className="new-account">
                <a href="#">Create an account?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
