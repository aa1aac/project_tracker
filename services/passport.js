const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findById(id, "-password");
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (username, password, done) => {
      try {
        let user = await User.findOne({ email: username });

        if (!user) done(null, false);

        let matchedPassword = await bcrypt.compare(password, user.password);

        if (matchedPassword) done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

module.exports = passport;
