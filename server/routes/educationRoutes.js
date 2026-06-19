const express = require("express");
const router = express.Router();

const { addEducation, deleteEducation, updateEducation, getAllEducation } = require("../controllers/educationController")
const { verifyToken } = require("../middleware/verifyToken")

router.get("/", getAllEducation)
router.post("/", verifyToken, addEducation)
router.delete("/:id", verifyToken, deleteEducation)
router.patch("/:id", verifyToken, updateEducation)

module.exports = router;