const bcrypt = require("bcrypt");

const User = require("../models/User");

const SignupController = async (req, res) => {
  let { name, email, password } = req.body;

  let existingUser = await User.findOne(email);

  if (!existingUser) {
    try {
      let hash = await bcrypt.hash(password, 12);

      let user = new User({
        name,
        email,
        password: hash,
      });

      await user.save();

      return res
        .status(200)
        .json({ staus: true, msg: "user successfully created" });
    } catch (error) {
      res.staus(503).json({ staus: false, msg: "some error occured" });
      console.error(error);
    }
  } else {
    return res
      .status(403)
      .json({ status: false, errors: ["the user already exists"] });
  }
};

const LoginController = (req, res) => {
  return res
    .status(200)
    .json({ staus: true, msg: "user successfully logged in" });
};

const LogoutController = (req, res) => {
  req.logout();
  res.redirect("/").status(200).json({ staus: true, msg: "user logged out" });
};

module.exports = {
  SignupController,
  LoginController,
  LogoutController,
};
