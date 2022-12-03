const jwt = require("jsonwebtoken");

const createToken = (credential) => {
  return jwt.sign(credential, process.env.SECRETKEY);
};

const validateToken = (req, res, next) => {
  let accessToken = req.cookies.authToken;
  console.log(accessToken);
  if (!accessToken) {
    console.log("No cookies");
    return res
      .status(200)
      .json({ message: "Authentication Denied", status: "failed" });
  }
  try {
    const validToken = jwt.verify(accessToken, process.env.SECRETKEY);
    if (validToken) {
      console.log(validToken);
      req.email = validToken;
      console.log(req.email);
      return next();
    }
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Authentication Failed", status: "failed" });
  }
};

module.exports = { createToken, validateToken };
