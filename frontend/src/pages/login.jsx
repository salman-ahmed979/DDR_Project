import "../css/login.css";
import MyImage from "../assets/login-page.jpg";
import MyImage1 from "../assets/logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const userProfile = { email, password };
  const { loginReq, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginReq(userProfile);
    if (!error) {
      email.includes("admin") ? history.push("/admin") : history.push("/user");
    }
  };
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
              <form onSubmit={handleSubmit}>
                <div className="error">
                  <p>{error}</p>
                </div>
                <div className="username">
                  <label>Email:</label>
                  <input
                    type="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="password">
                  <label>Password:</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="submitButton">
                  <button disabled={loading}>Login</button>
                </div>
              </form>
              <div className="new-account">
                <Link to="/signup">Create an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
