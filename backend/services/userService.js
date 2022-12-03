const User = require("../models/user.model");

class UserService {
  constructor() {}

  async signUpUser(userObj) {
    const { name, email, password } = userObj;
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    return user;
  }

  async getUser(email) {
    const user = await User.findOne({ email });
    return user;
  }
}

module.exports = { UserService };
