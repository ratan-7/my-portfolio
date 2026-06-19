const express = require("express")
const router = express.Router()

const { getSettings, updateSettings } = require("../controllers/settingsController")
const { verifyToken } = require("../middleware/verifyToken")

router.get("/", getSettings);

router.put("/", verifyToken, updateSettings);

module.exports = router;