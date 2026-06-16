const express = require("express")
const router = express.Router()
const { createProject, deleteProject, updateProject, getAllProject } = require("../controllers/projectController")

router.get("/get-all-project", getAllProject);
router.post("/create-project", createProject);
router.delete("/delete-project/:id", deleteProject);
router.patch("/update-project/:id", updateProject);

module.exports = router;