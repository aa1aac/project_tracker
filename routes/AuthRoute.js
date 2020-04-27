const express = require("express");
const { check, validationResult } = require("express-validator");
const passport = require("passport");

const {
  SignupController,
  LoginController,
  LogoutController,
  getUserController,
  githubLoginController,
} = require("../controllers/AuthController");

const router = express.Router();

// /api/auth/signup
// PUBLIC
// POST
router.post(
  "/signup",
  [
    check("email").isEmail().normalizeEmail().withMessage("email is invalid"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("password should have minimum length of 8")
      .bail()
      .matches(/\d/)
      .withMessage("password should have at least one number"),
    check("confirm")
      .isLength({ min: 8 })
      .withMessage("the password and confirm password do not match"),
    check("name")
      .isLength({ min: 3 })
      .trim()
      .withMessage("name should have minimum length of 3")
      .bail(),
  ],
  (req, res, next) => {
    results = validationResult(req).formatWith(({ msg }) => `${msg}`);

    if (!results.isEmpty()) {
      return res.status(403).json({ status: false, errors: results.array() });
    } else {
      if (req.body.password !== req.body.confirm) {
        return res.status(403).json({
          status: false,
          errors: ["password & confirm password do not match"],
        });
      }
      next();
    }
  },
  SignupController
);

// /api/auth/login
// PUBLIC
// POST
router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("invalid email or password"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("invalid email or password")
      .bail()
      .matches(/\d/)
      .withMessage("invalid email or Password"),
  ],
  (req, res, next) => {
    let results = validationResult(req).formatWith(({ msg }) => msg);

    if (!results.isEmpty()) {
      return res.status(403).json({ status: false, errors: results.array() });
    }
    next();
  },
  passport.authenticate("local"),
  LoginController
);

// /api/auth/logout
// GET
router.get("/logout", LogoutController);

// /api/auth/me
// GET
router.get("/me", getUserController);

// /api/auth/github
// GET
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// /api/auth/github/callback
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/#/",
    failureMessage: "some error occured",
  }),
  githubLoginController
);

module.exports = router;
