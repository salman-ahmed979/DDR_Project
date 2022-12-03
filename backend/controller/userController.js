const bcrypt = require("bcrypt");
const { createToken } = require("../middleware/JWT");
const User = require("../models/user.model");

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (name === "" || email === "" || password === "")
    return res
      .status(200)
      .json({ message: "Fields are empty!", status: "failed" });
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name: name,
    email: email,
    password: hashPassword,
  });
  if (user) {
    console.log(hashPassword);
    return res
      .status(200)
      .json({ message: "Sign Up successful", status: "success" });
  } else {
    return res
      .status(200)
      .json({ message: "Duplicate Email", status: "failed" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (email === "" || password === "")
    return res
      .status(200)
      .json({ message: "Fields are empty!", status: "failed" });
      
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = createToken(user.email);
    res.cookie("authToken", accessToken, {
      maxAge: 180000,
      httpOnly: true,
      secure: false,
    });
    return res.status(200).json({ message: "Login Successfull!", status: "success" });
  }
  else {
    return res
      .status(200)
      .json({ message: "User doesnot exist", status: "failed" });
  }
};

module.exports = { signUp, login };
