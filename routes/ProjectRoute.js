const express = require("express");

const isAuth = require("../middleware/isAuth");
const {
  getProjects,
  getSpecificProject,
  addProject,
  removeProject,
} = require("../controllers/ProjectController");

const router = express.Router();

// /api/project
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
router.post("/add", isAuth, addProject);

// /api/project/remove/:id
// GET
// PRIVATE
router.get("/remove/:id", isAuth, removeProject);

module.exports = router;
