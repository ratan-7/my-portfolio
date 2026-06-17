const express = require("express");
const router = express.Router();

const { addSkill, deleteSkill, updateSkill, getAllSkill } = require("../controllers/skillController")

router.get("/get-all-skills", getAllSkill);
router.post("/add-skill", addSkill);
router.delete("/delete-skill/:id", deleteSkill);
router.patch("/update-skill/:id", updateSkill)

module.exports = router;