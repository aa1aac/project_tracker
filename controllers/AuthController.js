const bcrypt = require("bcryptjs");

const User = require("../models/User");

const SignupController = async (req, res) => {
  let { name, email, password } = req.body;

  let existingUser = await User.findOne({ email });

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

const LoginController = async (req, res) => {
  let user = await User.findOne({ email: req.body.email }, "name email");
  return res
    .status(200)
    .json({ staus: true, msg: "user successfully logged in", user });
};

const LogoutController = (req, res) => {
  req.logout();
  res.redirect("/").status(200).json({ staus: true, msg: "user logged out" });
};

const getUserController = (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: "user successfully fetched", user: req.user });
};

module.exports = {
  SignupController,
  LoginController,
  LogoutController,
  getUserController,
};
