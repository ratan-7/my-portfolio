const express = require("express")
const router = express.Router()
const { createProject, deleteProject, updateProject, getAllProject } = require("../controllers/projectController")
const { verifyToken } = require("../middleware/verifyToken")

router.get("/", getAllProject);
router.post("/", verifyToken, createProject);
router.delete("/:id", verifyToken, deleteProject);
router.patch("/:id", verifyToken, updateProject);

module.exports = router;