import { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
const User = () => {
  const loginurl = "http://localhost:5000/user/login";
  const signupurl = "http://localhost:5000/user/signup";
  const [showLogin, setShowlogin] = useState(true);
  return (
    <>
      {showLogin ? (
        <Login url={loginurl} showLogin={showLogin} />
      ) : (
        <Signup url={signupurl} showLogin={showLogin} />
      )}
    </>
  );
};

export default User;
