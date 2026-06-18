const express = require("express");
const router = express.Router();
const { addExperience, deleteExperience, updateExperience, getAllExperience } = require("../controllers/experienceController")

router.get("/get-all-experience", getAllExperience)
router.post("/add-experience", addExperience);
router.delete("/delete-experience/:id", deleteExperience)
router.patch("/update-experience/:id", updateExperience)

module.exports = router;
