const express = require("express");
const router = express.Router();

const { addEducation, deleteEducation, updateEducation, getAllEducation } = require("../controllers/educationController")

router.get("/get-all-education", getAllEducation)
router.post("/add-education", addEducation)
router.delete("/delete-education/:id", deleteEducation)
router.patch("/update-education/:id", updateEducation)

module.exports = router;