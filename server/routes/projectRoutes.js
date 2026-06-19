const express = require("express")
const router = express.Router()
const { createProject, deleteProject, updateProject, getAllProject } = require("../controllers/projectController")
const { verifyToken } = require("../middleware/verifyToken")
const upload = require("../middleware/upload")

router.get("/", getAllProject);
router.post("/", verifyToken, upload.single("image"), createProject);
router.delete("/:id", verifyToken, deleteProject);
router.patch("/:id", verifyToken, upload.single("image"), updateProject);

module.exports = router;