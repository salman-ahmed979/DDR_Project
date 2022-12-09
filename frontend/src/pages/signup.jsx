import "../css/login.css";
import MyImage from "../assets/login-page.jpg";
import MyImage1 from "../assets/logo.png";
import { useSignup } from "../hooks/useSignup";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userProfile = { name, email, password };
  const history = useHistory();
  const user = { ...userProfile };
  const { signupReq, error, loading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signupReq(user);
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
                <div className="username">
                  <div className="error">
                    <p>{error}</p>
                  </div>
                  <label>Name:</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="username">
                  <label>Email:</label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="password">
                  <label>Password:</label>
                  <input
                    type="password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="submitButton">
                  <button disabled={loading}>SignUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
