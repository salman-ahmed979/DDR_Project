const bcrypt = require("bcrypt");
const { UserService } = require("../services/userService");
const { createToken } = require("../middleware/JWT");

class UserController {
  constructor() {}

  async signUp(req, res) {
    const { name, email, password } = req.body;
    if (name === "" || email === "" || password === "")
      return res
        .status(200)
        .json({ message: "Fields are empty!", status: "failed" });

    let userService = new UserService();
    const user = await userService.signUpUser(req.body);

    if (user) {
      return res
        .status(200)
        .json({ message: "Sign Up successful", status: "success" });
    } else {
      return res
        .status(200)
        .json({ message: "Duplicate Email", status: "failed" });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      return res
        .status(200)
        .json({ message: "Fields are empty!", status: "failed" });
    }

    let userService = new UserService();
    const user = await userService.getUser(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = createToken(user.email);
      res.cookie("authToken", accessToken, {
        maxAge: 180000,
        httpOnly: true,
        secure: false,
      });
      return res
        .status(200)
        .json({ message: "Login Successfull!", status: "success" });
    } else {
      return res
        .status(200)
        .json({ message: "User doesnot exist", status: "failed" });
    }
  }
}

module.exports = { UserController };
