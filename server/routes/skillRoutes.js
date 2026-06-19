const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/verifyToken")
const { addSkill, deleteSkill, updateSkill, getAllSkill } = require("../controllers/skillController")

router.get("/", getAllSkill);
router.post("/", verifyToken, addSkill);
router.delete("/:id", verifyToken, deleteSkill);
router.patch("/:id", verifyToken, updateSkill)

module.exports = router;