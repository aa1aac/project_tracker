const express = require("express");
const { check, validationResult } = require("express-validator");

const isAuth = require("../middleware/isAuth");
const {
  getProjects,
  getSpecificProject,
  addProject,
  removeProject,
} = require("../controllers/ProjectController");

const router = express.Router();

// /api/project/:skip
// GET
// PRIVATE
router.get("/:skip", isAuth, getProjects);

// /api/project/specific/:id
// GET
// PRIVATE
router.get("/specific/:id", isAuth, getSpecificProject);

// /api/project/add
// POST
// PRIVATE
router.post(
  "/add",
  isAuth,
  [
    check("title")
      .trim()
      .isLength({ min: 3 })
      .withMessage("title should have minimum length of 3"),
    check("tag").isIn(["urgent", "not urgent"]),
    check("description")
      .trim()
      .isLength({ min: 10, max: 200 })
      .withMessage(
        "description should have minimum 10 character and maximum 200"
      ),
    check("toBeCompleted").isISO8601().withMessage("invalid date"),
  ],
  (req, res, next) => {
    let results = validationResult(req).formatWith(({ msg }) => msg);

    if (!results.isEmpty()) {
      return res.status(422).json({ status: false, errors: results.array() });
    }

    next();
  },
  addProject
);

// /api/project/remove/:id
// GET
// PRIVATE
router.get("/remove/:id", isAuth, removeProject);

module.exports = router;
