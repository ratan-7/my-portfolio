const express = require("express");
const router = express.Router();
const { addExperience, deleteExperience, updateExperience, getAllExperience } = require("../controllers/experienceController")
const { verifyToken } = require("../middleware/verifyToken")

router.get("/", getAllExperience)
router.post("/", verifyToken, addExperience);
router.delete("/:id", verifyToken, deleteExperience)
router.patch("/:id", verifyToken, updateExperience)

module.exports = router;
