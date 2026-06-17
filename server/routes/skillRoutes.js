const express = require("express");
const router = express.Router();

const { addSkill } = require("../controllers/skillController")

router.post("/add-skill", addSkill);

module.exports = router;