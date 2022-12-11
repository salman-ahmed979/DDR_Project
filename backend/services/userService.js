const User = require("../models/user.model");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {}

  async signUpUser(userObj) {
    const { name, email, password } = userObj;
    const userAvailable = await this.getUser(email);
    if (userAvailable != null)
      return null;
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    return user;
  }

  async getUser(_email) {
    const user = await User.findOne({ email: _email });

    return user;
  }
}

module.exports = { UserService };
